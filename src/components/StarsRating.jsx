/* eslint-disable react/prop-types */
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StarsRating({ vote = 0 }) {
  //array voto massimo con numeri da 1  a 5
  console.log('vote:', vote);

  const stars = Array(5)
    .fill(0)
    .map((_, i) => i + 1);

  // confronto con ogni numero dell'array stars con il voto. se il numero è minore del voto finale allora la stella sarà piena, altrimenti vuota
  return (
    <div className="stars my-3">
      {stars.map((n) =>
        // se il numero corrente è minore del voto stella piena
        n <= vote ? (
          <FontAwesomeIcon key={n} icon={fullStar} />
        ) : (
          // stella vuota
          <FontAwesomeIcon icon={faStar} key={n} />
        )
      )}
    </div>
  );
}
