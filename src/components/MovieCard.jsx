export default function MovieCard({ movie }) {
  // const { image, title } = movie;
  return (
    <div className="card">
      <img src="" alt="copertina film" />
      <div className="card-body">
        <h2 className="card-title">Card title</h2>
        <p className="card-text">autore</p>
        <a href="#" className="btn btn-primary">
          Dettagli
        </a>
      </div>
    </div>
  );
}
