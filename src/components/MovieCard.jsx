import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  const { image, title, director, id, release_year } = movie;

  return (
    <div className="card position-relative h-100 overflow-hidden  mx-auto mx-sm-0">
      <img className="card-img-top object-fit-cover h-100" src={image} alt="copertina film" />
      <div className="my_overlay">
        <div className="card-body ">
          <h2 className="card-title fs-4 fw-bold text-uppercase text-truncate ">{title}</h2>
          <p className="card-text fst-italic ">{director}</p>
          <p className="year">{release_year} </p>
          <Link to={`/movies/${id}`} className="btn btn-primary">
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
