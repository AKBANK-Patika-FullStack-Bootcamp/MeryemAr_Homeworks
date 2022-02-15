using DAL.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MutlulukApartmani_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KullaniciController : ControllerBase
    {
        List<KullaniciBilgileri> kullaniciListesi = new List<KullaniciBilgileri>();
        Result _result = new Result();

        DBOperations dbOperation = new DBOperations();
        
        [Authorize]
        [HttpGet]
        public List<KullaniciBilgileri> GetKullaniciBilgileri()
        {

            return dbOperation.GetKullanicilar();
        }

  

        [HttpGet("{Id}")]
        public KullaniciBilgileri GetKullaniciBilgileri(int Id)
        {
            List<KullaniciBilgileri> kullaniciListesi = new List<KullaniciBilgileri>();

            KullaniciBilgileri? resultObject = new KullaniciBilgileri();
            resultObject = kullaniciListesi.Find(x => x.Id == Id);
            return resultObject;

        }

       

        [HttpPost]
        public Result Post(KullaniciBilgileri kullanici)
        {
            KullaniciBilgileri yeniKull = dbOperation.FindKullaniciBilgileri(kullanici.Ad, kullanici.Soyad);
            

            bool kullaniciCheck = (yeniKull != null) ? true : false;

            if (kullaniciCheck == false)
            {
                if (dbOperation.AddModel(kullanici) == true)
                {
                    _result.status = 1;
                    _result.Message = "Yeni eleman listeye eklendi.";
                }
                else
                {
                    _result.status = 0;
                    _result.Message = "Hata, kullanýcý eklenemedi.";
                }

            }
            else
            {
                _result.status = 0;
                _result.Message = "Bu eleman listede zaten var.";
            }

            return _result;
        }

       





        [HttpPut("{Id}")]
        public Result Update(int Id, KullaniciBilgileri newValue)
        {

            //Kullan�c� g�ncelleme i�lemi yap�l�r.
            KullaniciBilgileri? _oldValue = kullaniciListesi.Find(o => o.Id == Id);
            if (_oldValue != null)
            {
                kullaniciListesi.Add(newValue);
                kullaniciListesi.Remove(_oldValue);

                _result.status = 1;
                _result.Message = "Kullan�c� bilgileri ba�ar�yla g�ncellendi";
                _result.KullaniciListesi = kullaniciListesi;
            }
            else
            {
                _result.status = 0;
                _result.Message = "Bu kullan�c�y� i�erde bulamad�k.";
            }
            return _result;

        }

        



        [HttpDelete("{Id}")]
        public Result Delete(int Id)
        {
            if (dbOperation.DeleteModel(Id))
            {
                _result.status = 1;
                _result.Message = "Kullan�c� silindi";
                _result.KullaniciListesi = kullaniciListesi;
            }
            else
            {
                _result.status = 0;
                _result.Message = "Kullan�c� zaten silinmi�ti.";
            }
            return _result;
        }

    }
}