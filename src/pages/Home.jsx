import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  //fetch dati al caricamento con useEffect hook
  function fetchMovies() {
    axios
      .get('http://localhost:3003/api/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchMovies, []);

  return (
    <div className="container-fluid">
      <ul className="row row-gap-4">
        {movies.map((movie, i) => (
          <li key={i} className="col-xs-12 col-sm-6 col-lg-3">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
