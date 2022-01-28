using DAL;
using Entities;

namespace SuperHeroAPI.Controllers
{
    public class DBOperations
    {
        private HeroContext _context = new HeroContext();
        LoggerCls logger = new LoggerCls();
       

        public bool AddModel(SuperHero HeroNames)
        {
            try
            {
                _context.SuperHero.Add(HeroNames);
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
                _context.HeroNames.Remove(FindHero("", "", Id));
                _context.SaveChanges();
                return true;
            }
            catch (Exception exc)
            {
                logger.createLog("HATA " + exc.Message);
                return false;
            }
        }
        public List<HeroNames> GetHero()
        {
            List<HeroNames> heroes = new List<HeroNames>();
            heroes = _context.HeroNames.ToList();
            heroes.OrderBy(x => x.LastName).ToList(); ;

            return heroes;
        }

        public HeroNames FindHero(string FirstName = "", string LastName = "", int Id = 0)
        {
            HeroNames? hero = new HeroNames();
            if (!string.IsNullOrEmpty(FirstName) && !string.IsNullOrEmpty(LastName))
                hero = _context.HeroNames.FirstOrDefault(m => m.FirstName == FirstName && m.LastName == LastName);
            else if (Id > 0)
            {
              hero = _context.HeroNames.FirstOrDefault(m => m.Id == Id);
            }
            return hero;
        }




    }
}
