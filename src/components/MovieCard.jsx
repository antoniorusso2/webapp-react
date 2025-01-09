export default function MovieCard({ movie }) {
  console.log(movie);

  const { image, title, director } = movie;
  return (
    <div className="card">
      <img src={image} alt="copertina film" />
      <div className="card-body">
        <h2 className="card-title fs-4">{title}</h2>
        <p className="card-text">{director}</p>
        <a href="#" className="btn btn-primary">
          Dettagli
        </a>
      </div>
    </div>
  );
}
