import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});

  // const movie = {
  //   id: 1,
  //   title: 'Inception',
  //   director: 'Christopher Nolan',
  //   abstract: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
  //   created_at: '2024-11-29T10:40:13.000Z',
  //   genre: 'Science Fiction',
  //   image: 'http://localhost:3003/movies-covers/inception.jpg',
  //   release_year: 2010,
  //   updated_at: '2024-11-29T10:40:13.000Z',
  // };
  const id = 1;

  function fetchMovie() {
    axios
      .get(`http://localhost:3003/api/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchMovie, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="d-flex gap-5 movie_details">
            <img src={movie.image} className="movie_thumb" alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.abstract}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
