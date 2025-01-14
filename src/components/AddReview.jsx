/* eslint-disable react/prop-types */
import axios from 'axios';
import { useContext, useState } from 'react';
import GlobalContext from '../contexts/globalContext';

const initialFormData = {
  name: '',
  text: '',
  vote: 0,
};

export default function AddReview({ id, onSuccess = () => {}, apiUrl = '' }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isDataValid, setIsDataValid] = useState(true);

  // loader
  const { setIsLoading } = useContext(GlobalContext);

  function handleChange(e) {
    //previene il ricaricamento della pagina al submit del for
    // console.log(e.target.name, e.target.value);

    //destrutturazione valori del form
    const { name: inputName, value } = e.target;

    //aggiorno stato form con i valori del camo in questione
    setFormData({
      ...formData,
      [inputName]: value.trim(),
    });
  }

  function handleForm(e) {
    e.preventDefault();

    setIsLoading(true);
    // console.log(formData);

    const { name, vote } = formData;

    if (!name || vote < 1 || vote > 5) {
      setIsDataValid(false);
      setIsLoading(false);
      return; // evito che il form venga inviato se non sono stati riempiti correttamente
    }

    axios
      .post(`${apiUrl}/movies/${id}`, formData)
      .then(() => {
        // console.log(res);
        //reset form e fetch movie tramite la callback passata dal componente padre
        setFormData(initialFormData);
        setIsDataValid(true);
        onSuccess();
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        // TODO: gestire l'errore appropriato nel caso di un fallimento nella chiamata API
      });

    // setFormData({});
  }
  return (
    <form onSubmit={handleForm} className="add_review p-5 blur">
      <h2 className="add_review_title text-center fw-bold fs-1">Aggiungi qui la tua recensione:</h2>
      {/* nome utente che inserisce la recensione */}
      <label htmlFor="name" className="my_label">
        Nome:
        <input className={`${!isDataValid ? 'not_valid' : ''}`} onChange={handleChange} type="text" id="name" name="name" value={formData.name} placeholder="Inserisci il tuo nome" required />
        {!isDataValid && <p className="error_message">Il nome è obbligatorio</p>}
      </label>
      {/* testo della recensione */}
      <label htmlFor="text">Recensione:</label>
      <textarea onChange={handleChange} id="text" name="text" rows="4" value={formData.text} />
      {/* voto della recensione */}
      <label className="my_label" htmlFor="vote">
        Voto:
        <select className={`${!isDataValid ? 'not_valid' : ''}`} onChange={handleChange} value={formData.vote} name="vote" id="vote">
          <option value="0">Scegli un voto</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {!isDataValid && <p className="error_message">Il voto è obbligatorio</p>}
      </label>
      {/* submit del form */}
      <button className="btn align-self-end">Invia</button>
    </form>
  );
}
