import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs col-sm-6 col-md-4 col-lg-3">
          <MovieCard />
        </div>
        <div className="col-xs col-sm-6 col-md-4 col-lg-3">
          <MovieCard />
        </div>
        <div className="col-xs col-sm-6 col-md-4 col-lg-3">
          <MovieCard />
        </div>
        <div className="col-xs col-sm-6 col-md-4 col-lg-3">
          <MovieCard />
        </div>
        <div className="col-xs col-sm-6 col-md-4 col-lg-3">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
