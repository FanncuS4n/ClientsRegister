using ClientsAPI.Models.Dto;

namespace ClientsAPI.Repository
{
    public interface IClientRepository
    {
        Task<List<ClientDto>> GetClients();
        Task<ClientDto> GetClientById(int id);
        Task<ClientDto> CreateUpdate(ClientDto clientDto);
        Task<bool> DeleteClient(int id);
    }
}
