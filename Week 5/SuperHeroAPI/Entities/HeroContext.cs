using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Entities
{
    public class HeroContext : DbContext
    {

        //protected readonly IConfiguration Configuration;
        public HeroContext()
        {

        }
        protected readonly IConfiguration Configuration;
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //options.UseSqlServer(Configuration.GetConnectionString("UserDBEntities"));
            options.UseSqlServer("Data Source = localhost; Database = SuperHeroAPI; integrated security = True;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SuperHero>().ToTable("SuperHero");
            modelBuilder.Entity<HeroNames>().ToTable("HeroNames");
        }
        public DbSet<SuperHero> SuperHero { get; set; }
        public DbSet<HeroNames> HeroNames { get; set; }

    }
}

