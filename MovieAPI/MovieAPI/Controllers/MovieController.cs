using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieAPI.Data;


namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : Controller
    {
        private readonly AppDbContext _context;
        public MovieController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Movie>>> GetMovies()
        {
            return Ok(await _context.Movies.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Movie>>> CreateMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return Ok(await _context.Movies.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Movie>>> UpdateMovie(Movie movie)
        {
            var dbMovie = await _context.Movies.FindAsync(movie.Id);
            if(dbMovie == null)
            {
                return BadRequest("Movie not found");

            }

            dbMovie.Name = movie.Name;
            dbMovie.Genre = movie.Genre;
            dbMovie.Studio = movie.Studio;

            await _context.SaveChangesAsync();

            return Ok(await _context.Movies.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Movie>>> DeleteMovie(int id)
        {
            var dbMovie = await _context.Movies.FindAsync(id);
            if (dbMovie == null)
                return BadRequest("Movie not found");

            _context.Movies.Remove(dbMovie);
            await _context.SaveChangesAsync();

            return Ok(await _context.Movies.ToListAsync());
        }
        


    }
}
