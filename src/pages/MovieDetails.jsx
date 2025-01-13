import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AddReview from '../components/AddReview';
import StarsRating from '../components/StarsRating';

//variabile con url api basato sul file env
const apiUrl = import.meta.env.VITE_API_URL;

export default function MovieDetails() {
  function fetchMovie() {
    axios
      .get(`${apiUrl}/movies/${id}`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  }
  //film corrente
  const [movie, setMovie] = useState({});

  //parametro dinamico id con hook use params
  const params = useParams();
  const id = params.id;

  //navigate per tornare alla pagina precedente
  const navigate = useNavigate();

  useEffect(fetchMovie, [id]); //async

  // console.log('movie ', movie.reviews);

  return (
    <div className="container-fluid px-4">
      <div className="row">
        <div className="col">
          <div className=" d-flex flex-column align-items-center flex-sm-row align-items-sm-start gap-5 movie_details">
            <img src={movie.image} className="movie_thumb object-fit-cover" alt="" />
            <div className="description">
              <h2 className="fs-1 fw-bold text-decoration-underline w-100">{movie.title}</h2>
              <p className="fst-italic">{movie.director}</p>
              <p className="abstract">{movie.abstract}</p>
              {/* <div className="stars my-3">{stars.map((n) => (n < movie.avg_vote ? <FontAwesomeIcon key={n} icon={fullStar} /> : <FontAwesomeIcon icon={faStar} key={n} />))}</div> */}
              <StarsRating vote={Math.round(movie.avg_vote)} />
              {movie.release_year && <p>Anno di uscita: {movie.release_year}</p>}
            </div>
          </div>
        </div>
      </div>
      {movie.reviews?.map((el, i) => (
        <div key={i} className="review px-5 my-3">
          <p className="review_name">{el.name}</p>
          <p className="review_description">{el.text}.</p>
          <StarsRating vote={el.vote} />
        </div>
      ))}

      <div className="col">
        <AddReview id={id} onSuccess={fetchMovie} apiUrl={apiUrl} />
      </div>
      <div className="col-12 mt-4">
        <button onClick={() => navigate(-1)} className="btn back mx-auto d-block">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </div>
  );
}
