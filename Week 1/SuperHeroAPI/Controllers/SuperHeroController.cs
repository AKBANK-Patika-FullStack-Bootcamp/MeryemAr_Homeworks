using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Net.Http;




namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]

    [ApiController]

    public class SuperHeroController : ControllerBase
    {
        private static List<SuperHero> heroes = new List<SuperHero>
               {

               new SuperHero{
                Id = 1,
                Name = "Spider Man",
                FirstName = "Peter",
                LastName = "Parker",
                Place = "New York"

               },

               new SuperHero{
                Id = 2,
                Name = "Iron Man",
                FirstName = "Tony",
                LastName = "Stark",
                Place = "Long Island"

               },

               new SuperHero{
                Id = 3,
                Name = "Captain Marvel",
                FirstName = "Carol",
                LastName = "Denvers",
                Place = "Dakota"

               },

               new SuperHero{
                Id = 4,
                Name = "Hulk",
                FirstName = "Bruce",
                LastName = "Banner",
                Place = "Brasil"

               }
        };

        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> Get()
        {
            return Ok(heroes);
        }

        [HttpGet("{Id}")]

        public async Task<ActionResult<List<SuperHero>>> Get(int Id)
        {
            var hero = heroes.Find(h => h.Id == Id);
            if (hero == null)
                return BadRequest("Hero not found.");
            return Ok(hero);
        }


        [HttpPost]

        public async Task<ActionResult<List<SuperHero>>> AddHero(SuperHero hero)
        {
            
            heroes.Add(hero);
            return Ok(hero);
        }


        [HttpPut("{Id}")]

        public async Task<ActionResult<List<SuperHero>>> UpdateHero(SuperHero request)
        {
            var hero = heroes.Find(h => h.Id == request.Id);
            if (hero == null)
                return BadRequest("Hero not found.");
                    
                hero.Name = request.Name;
                hero.FirstName = request.FirstName;
                hero.LastName = request.LastName;
                hero.Place = request.Place;  
                    
                return Ok(hero);
        }

        [HttpDelete("{Id}")]

        public async Task<ActionResult<List<SuperHero>>> Delete(int Id)
        {
            var hero = heroes.Find(h => h.Id == Id);
            if (hero == null)
                return BadRequest("Hero not found.");
                
                heroes.Remove(hero);
           
                return Ok(heroes);
        }


    }
}



    

