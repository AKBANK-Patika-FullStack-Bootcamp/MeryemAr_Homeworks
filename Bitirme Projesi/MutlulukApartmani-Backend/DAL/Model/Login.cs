using Microsoft.AspNetCore.Mvc;

namespace DAL.Model
{
    public class Login
    {
        public string Mail { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
    public class LoginDto
    {
        [FromHeader]
        public string Mail { get; set; } = string.Empty;
        [FromHeader]
        public string Password { get; set; } = string.Empty;
    }
    public class APIAuthority
    {
        public int Id { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public bool Admin { get; set; }


    }
}
