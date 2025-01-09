import { Link } from 'react-router-dom';
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
    <div className="container">
      <div className="row">
        {movies.map((movie, i) => (
          <div key={i} className="col-xs col-sm-6 col-md-4 col-lg-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
