using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Model

{
    public class DaireBilgileri
    {
        public int Id { get; set; }
        public int Kat { get; set; }
        public string? Tip { get; set; }
        public string? Status { get; set; }
        public string? IkametEden { get; set; }
        public string? Blok { get; set; }
        
    }
}
