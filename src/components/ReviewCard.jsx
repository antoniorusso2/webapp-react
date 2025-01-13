import StarsRating from './StarsRating';

export default function ReviewCard({ reviews = [] }) {
  return (
    reviews &&
    reviews.map((r, i) => (
      <div key={i} className="review px-5 my-3">
        <p className="review_name">{r.name}</p>
        <p className="review_description">{r.text}.</p>
        <StarsRating rating={r.vote} />
      </div>
    ))
  );
}
