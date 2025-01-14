import MovieCard from '../components/MovieCard';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GlobalContext from '../contexts/globalContext';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  const { setIsLoading } = useContext(GlobalContext);

  //fetch dati al caricamento con useEffect hook
  function fetchMovies(searchParam = '') {
    setIsLoading(true);
    axios
      .get('http://localhost:3000/api/movies', {
        params: {
          title: searchParam,
        },
      })
      .then((res) => {
        setMovies(res.data);
        // console.log(res.data);
        setError(null);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          //sovrascrivo il messaggio di errore con la versione tradotta in italiano e personalizzato per l'utente
          err.response.data.message = 'Nessun film corrisponde al filtro di ricerca';
        }
        setError(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(fetchMovies, []);

  //risoluzione ricerca = fare di nuovo il fetch dei dati in base all input

  function handleSearch(e) {
    //setSearch in questa funzione verrebbe risolto in maniera asincrona causando un ritardo di un carattere tra il valore presente in variabile e quello effettivo scritto nella barra di ricerca
    e.preventDefault();
    fetchMovies(search);
    console.log(`Ricerca in corso per: ${search}`);
  }

  return (
    <>
      <div className="container-fluid mb-5 px-5">
        <form onSubmit={handleSearch} className="d-flex mx-auto my-4 justify-content-center" role="search">
          {/* il valore del campo di ricerca viene gestito direttamente tramite la funzione di callback passata all'input */}
          <input className="form-control w-50 me-2 text-truncate" value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Cerca il titolo di un film" aria-label="Search" />
          <button className="btn search" type="submit">
            Cerca
          </button>
        </form>
      </div>
      <div className="container-fluid px-5">
        <ul className="row row-gap-5">
          {/* se è presente un errore durante il la ricerca tramite filtro*/}
          {error ? (
            <div className="container">
              <p className="text-center fs-2 fw-bolder text-body-emphasis text-capitalize fst-italic ">{error.message}</p>

              <button
                onClick={() => {
                  setSearch('');
                  fetchMovies();
                }}
                className="btn back d-block mx-auto"
              >
                Torna indietro
              </button>
            </div>
          ) : (
            movies.map((movie, i) => (
              <li
                key={i}
                className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-3
              "
              >
                <MovieCard movie={movie} />
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
