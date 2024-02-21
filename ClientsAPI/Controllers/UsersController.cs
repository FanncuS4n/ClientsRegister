using ClientsAPI.Models;
using ClientsAPI.Models.Dto;
using ClientsAPI.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ClientsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        protected ResponseDto _response;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _response = new ResponseDto();
        }
        [HttpPost("Register")]
        public async Task<ActionResult> Register(UserDto user)
        {
            string response = await _userRepository.Register(
                new User {UserName = user.UserName}, user.Password
                );
            if (response == "exists")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "User already exists";
                return BadRequest(_response);
            }
            if (response == "error")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error creating user";
                return BadRequest(_response);
            }
            _response.DisplayMessage = "User created successfuly";
            //_response.Result = response;

            var jtp = new JwTPackage();
            jtp.UserName = user.UserName;
            jtp.Token = response;

            _response.Result = jtp;
            
            return Ok(_response);
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(UserDto user)
        {
            string response = await _userRepository.Login(user.UserName, user.Password);

            if(response == "nouser")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "User does not exist";
                return BadRequest(_response);
            }
            else if (response == "wrongpassword")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Wrong password";
                return BadRequest(_response);
            }
            //_response.Result = response;
            var jtp = new JwTPackage();
            jtp.UserName = user.UserName;
            jtp.Token = response;

            _response.Result = jtp;

            _response.DisplayMessage = "User conected";
            return Ok(_response);
        }
    }

    public class JwTPackage
    {
        public string UserName { get; set; }
        public string Token { get; set; }
    }
}
