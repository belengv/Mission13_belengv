import { useEffect, useState } from 'react';
import { Movies } from '../types/movie';

//This fucntion will get is the data from the API
function MovieListSqlite() {
  const [movieData, setMovieData] = useState<Movies[]>([]);
  //Copying local host 4000 (api url) and getting the data from there
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  //Creating our table
  return (
    <>
      <div className="row">
        <h4>Joel Hilton Movie Collection</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieListSqlite;
