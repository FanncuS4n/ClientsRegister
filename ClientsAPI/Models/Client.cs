using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ClientsAPI.Models
{
    public class Client
    {
        [Key]
        public int Id {  get; set; }
        public required string Client_Name { get; set; }
        public required string Surname { get; set; }
        public required string Adress { get; set; }
        public required string Phone { get; set; }

    }
}
