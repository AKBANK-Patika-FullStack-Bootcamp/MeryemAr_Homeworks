using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model
{
    public class Result
    {
        public int status { get; set; }
        public string? Message { get; set; }
        public List<KullaniciBilgileri>? KullaniciListesi { get; set; }
    }
}
