using ClientsAPI.Models;

namespace ClientsAPI.Repository
{
    public interface IUserRepository
    {
        Task<int> Register(User user, string passsword);
        Task<string> Login(string userName, string password);
        Task<bool> UserExists(string userName);
    }
}
