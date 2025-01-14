import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AddReview from '../components/AddReview';
import StarsRating from '../components/StarsRating';
import GlobalContext from '../contexts/globalContext';

//variabile con url api basato sul file env
const apiUrl = import.meta.env.VITE_API_URL;

export default function MovieDetails() {
  const { setIsLoading } = useContext(GlobalContext);
  function fetchMovie() {
    setIsLoading(true);
    window.scrollTo(0, 0); //torna alla prima riga quando si carica la pagina

    axios
      .get(`${apiUrl}/movies/${id}`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
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
    <div className="container-fluid px-4 detail_page" style={{ backgroundImage: `url(${movie.image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="row py-5">
        <div className="col-12 mb-3">
          <div className="d-flex flex-column align-items-center flex-sm-row align-items-sm-start gap-5 movie_details blur p-4">
            <img src={movie.image} className="movie_thumb object-fit-cover" alt="" />
            <div className="description">
              <h2 className="fs-1 fw-bold text-decoration-underline w-100 mb-5">{movie.title}</h2>
              <p className="fst-italic">{movie.director}</p>
              <p className="abstract">{movie.abstract}</p>
              {/* voto con stelline */}
              <StarsRating vote={Math.round(movie.avg_vote)} />
              {movie.release_year && <p>Anno di uscita: {movie.release_year}</p>}
            </div>
          </div>
        </div>
        {movie.reviews?.map((el, i) => (
          <div key={i} className="col-12">
            <div className="review blur py-3 my-2">
              <p className="review_name">{el.name}</p>
              <p className="review_description">{el.text}.</p>
              <StarsRating vote={el.vote} />
            </div>
          </div>
        ))}
        <div className="col-12 my-3">
          <AddReview id={id} onSuccess={fetchMovie} apiUrl={apiUrl} />
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
