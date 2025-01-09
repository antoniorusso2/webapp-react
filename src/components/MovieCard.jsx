import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  const { image, title, director, id } = movie;

  return (
    <div className="card overflow-hidden">
      <img className="card-img-top" src={image} alt="copertina film" />
      <div className="card-body">
        <h2 className="card-title fs-4 fw-bold text-uppercase text-truncate ">{title}</h2>
        <p className="card-text text-body-tertiary fst-italic ">{director}</p>
        <Link to={`/movies/${id}`} className="btn btn-primary">
          Dettagli
        </Link>
      </div>
    </div>
  );
}
