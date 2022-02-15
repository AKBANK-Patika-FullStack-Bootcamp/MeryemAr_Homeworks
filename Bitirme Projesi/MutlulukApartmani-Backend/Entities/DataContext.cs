using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Entities
{
    public class DataContext : DbContext
    {
        protected readonly IConfiguration Configuration;
        public DataContext()
        {
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Data Source = localhost; Database = MutlulukApartmani; integrated security = True;");
        
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DaireBilgileri>().ToTable("DaireBilgileri");
            modelBuilder.Entity<KullaniciBilgileri>().ToTable("KullaniciBilgileri");
            modelBuilder.Entity<APIAuthority>().ToTable("APIAuthority");
        }

        public DbSet<DaireBilgileri> DaireBilgileri { get; set; }
        public DbSet<KullaniciBilgileri> KullaniciBilgileri { get; set; }
        public DbSet<APIAuthority> APIAuthority { get; set; }

    }
}
