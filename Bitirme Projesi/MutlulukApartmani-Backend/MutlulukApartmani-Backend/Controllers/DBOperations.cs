using DAL.Model;
using Entities;


namespace MutlulukApartmani_Backend.Controllers
{
    public class DBOperations
    {
        private DataContext _context = new DataContext();
        LoggerCls logger = new LoggerCls();

        #region KULLANICIBILGILERI FONKS..
        public bool AddModel(KullaniciBilgileri _kullanici)
        {
            try
            {
                _context.KullaniciBilgileri.Add(_kullanici);
                _context.SaveChanges();
                return true;
            }
            catch (Exception exc)
            {
                logger.createLog("HATA " + exc.Message);
                return false;
            }
        }
        public bool DeleteModel(int Id)
        {
            try
            {
                _context.KullaniciBilgileri.Remove(FindKullaniciBilgileri("", "", Id));
                _context.SaveChanges();
                return true;
            }
            catch (Exception exc)
            {
                logger.createLog("HATA " + exc.Message);
                return false;
            }
        }
        public List<KullaniciBilgileri> GetKullanicilar()
        {
            List<KullaniciBilgileri> kullanicia = new List<KullaniciBilgileri>();
            kullanicia = _context.KullaniciBilgileri.ToList();

            InnerJoinExample();

            return kullanicia;
        }

        public KullaniciBilgileri FindKullaniciBilgileri(string Ad = "", string Soyad = "", int Id = 0)
        {
            KullaniciBilgileri? kullanici = new KullaniciBilgileri();
            if (!string.IsNullOrEmpty(Ad) && !string.IsNullOrEmpty(Soyad))
                kullanici = _context.KullaniciBilgileri.FirstOrDefault(m => m.Ad == Ad && m.Soyad == Soyad);
            else if (Id > 0)
            {
                kullanici = _context.KullaniciBilgileri.FirstOrDefault(m => m.Id == Id);
            }
            return kullanici;
        }

        public void InnerJoinExample()
        {
            var kullanici = _context.KullaniciBilgileri.Join(_context.DaireBilgileri, a => a.Id,
                  u => u.Id,
                 (kullanici, daire) => new DaireBilgileri { Kat = daire.Kat, Tip = daire.Tip }).ToList();

        }

        #endregion

        #region TOKEN FONKS..
        public void CreateLogin(APIAuthority loginKullaniciBilgileri)
        {
            _context.APIAuthority.Add(loginKullaniciBilgileri);
            _context.SaveChanges();
        }

        public APIAuthority GetLogin(APIAuthority loginKullaniciBilgileri)
        {
            APIAuthority? kullanici = new APIAuthority();
            if (!string.IsNullOrEmpty(loginKullaniciBilgileri.Mail) && !string.IsNullOrEmpty(loginKullaniciBilgileri.Password))
            {
                kullanici = _context.APIAuthority.FirstOrDefault(m => m.Mail == loginKullaniciBilgileri.Mail && m.Password == loginKullaniciBilgileri.Password);
            }

            return kullanici;

        }
        #endregion

    }
}