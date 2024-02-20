using System.ComponentModel.DataAnnotations;

namespace ClientsAPI.Models.Dto
{
    public class ClientDto
    {
        public int Id { get; set; }
        public string? Client_Name { get; set; }
        public string? Surname { get; set; }
        public string? Adress { get; set; }
        public string? Phone { get; set; }
    }
}
