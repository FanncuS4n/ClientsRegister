using ClientsAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClientsAPI.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            
        }
        public DbSet<Client> Clients { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
