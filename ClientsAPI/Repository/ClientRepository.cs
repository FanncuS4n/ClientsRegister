using AutoMapper;
using ClientsAPI.Data;
using ClientsAPI.Models;
using ClientsAPI.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace ClientsAPI.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly ApplicationDBContext _db;
        private IMapper _mapper;
        public ClientRepository(ApplicationDBContext db, IMapper mapper) 
        {
            _db = db;
            _mapper = mapper;
        }
        public async Task<ClientDto> CreateUpdate(ClientDto clientDto)
        {
            Client client = _mapper.Map<ClientDto, Client>(clientDto);

            if (client.Id > 0)
            {
                _db.Clients.Update(client);
            }
            else
            {
                await _db.Clients.AddAsync(client);
            }
            await _db.SaveChangesAsync();

            return _mapper.Map<Client, ClientDto>(client);
        }

        public async Task<bool> DeleteClient(int id)
        {
            try
            {
                Client? client = await _db.Clients.FindAsync(id);
                if (client == null)
                {
                    return false;
                }
                _db.Clients.Remove(client);
                await _db.SaveChangesAsync();

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<ClientDto> GetClientById(int id)
        {
            Client? client = await _db.Clients.FindAsync(id);

            return _mapper.Map<ClientDto>(client);
        }

        public async Task<List<ClientDto>> GetClients()
        {
            List<Client> clientsList = await _db.Clients.ToListAsync();

            return _mapper.Map<List<ClientDto>>(clientsList);
        }
    }
}
