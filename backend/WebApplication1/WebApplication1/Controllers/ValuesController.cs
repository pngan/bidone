using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApplication1.Controllers
{
    public class FullName
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }


        // POST api/values
        [HttpPost]
        public ActionResult<string> Post([FromBody] FullName fullName)
        {
            var fullNameString = JsonConvert.SerializeObject(fullName);
            var path = System.IO.Path.GetTempFileName();
            using (var writer = System.IO.File.CreateText(path))
            {
                writer.WriteLine(fullNameString);
            }

            // Return the name of the name file to the web client so that it can be found 
            return  "{\"file name\": \""+ path.Replace("\\", "/") + "\"}";
        }
    }
}
