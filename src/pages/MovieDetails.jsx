import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDetails() {
  function fetchMovie() {
    axios
      .get(`http://localhost:3003/api/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  }
  //film corrente
  const [movie, setMovie] = useState({});

  //creazione array per l'inserimento delle stelle
  const stars = Array(5)
    .fill(0)
    .map((_, i) => i + 1);
  console.log(stars);

  //parametro dinamico id con hook use params
  const params = useParams();
  const id = params.id;

  //navigate per tornare alla pagina precedente
  const navigate = useNavigate();

  useEffect(fetchMovie, [id]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className=" d-flex flex-column align-items-center flex-sm-row align-items-sm-start gap-5 movie_details">
            <img src={movie.image} className="movie_thumb object-fit-cover" alt="" />
            <div className="description">
              <h2 className="fs-1 fw-bold text-decoration-underline w-100">{movie.title}</h2>
              <p className="fst-italic text-secondary">{movie.director}</p>
              <p className="fs-4">{movie.abstract}</p>
              {movie.release_year && <p>Anno di uscita: {movie.release_year}</p>}
            </div>

            <div className="stars">{stars.map((n) => (n < movie.avg_vote ? <FontAwesomeIcon key={n} icon={fullStar} /> : <FontAwesomeIcon icon={faStar} key={n} />))}</div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <button onClick={() => navigate(-1)} className="btn back mx-auto d-block">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
      </div>
    </div>
  );
}
