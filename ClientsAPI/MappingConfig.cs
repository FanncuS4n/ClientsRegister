using AutoMapper;
using ClientsAPI.Models;
using ClientsAPI.Models.Dto;

namespace ClientsAPI
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<ClientDto, Client>();
                config.CreateMap<Client, ClientDto>();
            });
            return mappingConfig;
        }
    }
}
