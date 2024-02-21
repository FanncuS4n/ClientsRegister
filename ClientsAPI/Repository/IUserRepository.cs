using ClientsAPI.Models;

namespace ClientsAPI.Repository
{
    public interface IUserRepository
    {
        Task<string> Register(User user, string passsword);
        Task<string> Login(string userName, string password);
        Task<bool> UserExists(string userName);
    }
}
