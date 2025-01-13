import { Link } from 'react-router-dom';
import StarsRating from './StarsRating';

/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  const { image, title, director, id, release_year, avg_vote } = movie;

  return (
    <div className="card position-relative h-100 overflow-hidden  mx-auto mx-sm-0">
      <img className="card-img-top object-fit-cover h-100" src={image} alt="copertina film" />
      <div className="my_overlay">
        <div className="card-body d-flex flex-column row-gap-0 p-5 h-100">
          <h2 className="card-title fs-4 fw-bold text-uppercase text-truncate w-100">{title}</h2>
          <StarsRating vote={avg_vote} />
          <p className="card-text fst-italic w-100">{director}</p>
          <p className="year w-100">{release_year} </p>
          <Link to={`/movies/${id}`} className="btn details mt-auto w-100">
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
