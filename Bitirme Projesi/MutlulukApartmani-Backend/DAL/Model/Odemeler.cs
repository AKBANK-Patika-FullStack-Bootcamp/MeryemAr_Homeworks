using Microsoft.AspNetCore.Mvc;
using DAL.Model;

namespace MutlulukApartmani_Backend.Controllers
{
    public class Odemeler

    {
        public int Id { get; set; }
        public string? BorcSahibi { get; set; }
        public int Miktar { get; set; }
        public string? Statu { get; set; }

    }
}
