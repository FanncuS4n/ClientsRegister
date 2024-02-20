using ClientsAPI.Data;
using ClientsAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ClientsAPI.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDBContext _db;

        private readonly IConfiguration _configuration;
        public UserRepository(ApplicationDBContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }
        public async Task<string> Login(string userName, string password)
        {
            User? user = await _db.Users.FirstOrDefaultAsync(x => x.UserName.ToLower().Equals(userName.ToLower()));

            if (user == null)
            {
                return "nouser";
            }
            else if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return "wrongpassword";
            }
            else
            {
                return CreateToken(user);
            }
        }

        public async Task<int> Register(User user, string password)
        {
            try
            {
                if(await UserExists(user.UserName))
                {
                    return -1;
                }
                CreatePasswordHash(password, out byte[] passwordHash, out byte[] passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;

                await _db.Users.AddAsync(user);
                await _db.SaveChangesAsync();
                return user.Id;
            }
            catch (Exception)
            {
                return -100;
            }
        }

        public async Task<bool> UserExists(string userName)
        {
            if (await _db.Users.AnyAsync(x => x.UserName.ToLower().Equals(userName.ToLower())))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private void CreatePasswordHash(string password, out byte[] passswordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                byte[] computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }   
                return true;
            }
        }
        private string CreateToken(User user)
        {
            var claims = new List<Claim>()
            {
                new(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            string? keyString = _configuration.GetSection("AppSettings:Token")?.Value;

            if(keyString == null)
            {
                throw new Exception("Key is not defined in the configuration");
            }
            if (keyString.Length < 64) // 64 bytes es igual a 512 bits
            {
                throw new Exception("Key lenght is too short. Must have at least 512 bits.");
            }

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(keyString));


            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            
            return tokenHandler.WriteToken(token);
        }   
    }
}
