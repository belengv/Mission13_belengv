using System;
using Microsoft.AspNetCore.Mvc;
using MovieAPI.Model;

//API controller where we convert the data to an Array
namespace MovieAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class MovieController: Controller
	{
		private MovieDbContext context;
		public MovieController(MovieDbContext temp)
		{
			context = temp;
		}
		public IEnumerable<Movie> Get()
		{
            //Getting only movies that were edited and ordered alphabetically
            var editedMovies = context.Movies
				.Where(m => m.Edited == "Yes")
				.OrderBy(m => m.Title)
				.ToArray();

            return editedMovies;
        }


	}
}

