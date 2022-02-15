using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using DAL.Model;
using Entities;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace MutlulukApartmani_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class AuthController : ControllerBase
    {

        public static Login login = new Login();

        private readonly IConfiguration _configuration;


        #pragma warning disable SYSLIB0021 // Tür veya üye artık kullanılmıyor
                private MD5CryptoServiceProvider md5 = new();
        #pragma warning restore SYSLIB0021 // Tür veya üye artık kullanılmıyor

        DBOperations dbOperation = new();


        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("create")]
        public bool loginCreate(APIAuthority kullanici)
        {
            kullanici.Password = MD5Hash(kullanici.Password);
            dbOperation.CreateLogin(kullanici);
            return true;
        }

        [HttpPost("login")]
        public ActionResult<string> Login([FromHeader] LoginDto request)
        {
            APIAuthority tokenKullanici = new()
            {
                Mail = request.Mail,
                Password = MD5Hash(request.Password)
            };

            APIAuthority result = dbOperation.GetLogin(tokenKullanici);

            if (result != null)
            {
                string token = CreateToken(login);
                return Ok(token);

            }
            else
            {
                return BadRequest("Kullanıcı yok ya da şifre hatalı.");
            }

        }

        private string CreateToken(Login login)
        {
            List<Claim> claims = new()
            {
                new Claim(ClaimTypes.Email, login.Mail),
                new Claim(ClaimTypes.Role, "Admin")
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        [HttpGet("md5hash")]

        public string MD5Hash(string _input)
        {

            byte[] dizi = Encoding.UTF8.GetBytes(_input);
            dizi = md5.ComputeHash(dizi);
            StringBuilder sb = new StringBuilder();
            foreach (byte ba in dizi)
            {
                sb.Append(ba.ToString("x2").ToLower());
            }
            return sb.ToString();
        }

       
    }
}