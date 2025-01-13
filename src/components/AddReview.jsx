/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';

const initialFormData = {
  name: '',
  text: '',
  vote: 0,
};

export default function AddReview({ id, onSuccess = () => {}, apiUrl = '' }) {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    //previene il ricaricamento della pagina al submit del for
    console.log(e.target.name, e.target.value);

    //destrutturazione valori del form
    const { name: inputName, value } = e.target;

    //formattazione trim stringa in input

    //aggiorno stato form con i valori del camo in questione
    setFormData({
      ...formData,
      [inputName]: value,
    });
  }

  function handleForm(e) {
    e.preventDefault();

    console.log(formData);

    if (!formData.name || !formData.text || 1 < formData.vote > 0) {
      alert('Il nome è un campo richiesto e il voto deve essere compreso tra 1 e 5');
      return; // evito che il form venga inviato se non sono stati riempiti correttamente
    }

    axios
      .post(`${apiUrl}/movies/${id}`, formData)
      .then((res) => {
        console.log(res);
        //reset form e fetch movie tramite la callback passata dal componente padre
        setFormData(initialFormData);
        onSuccess();
      })
      .catch((err) => {
        console.error(err);
        // TODO: gestire l'errore appropriato nel caso di un fallimento nella chiamata API
      });

    // setFormData({});
  }
  return (
    <form onSubmit={handleForm} className="add_review">
      <h2 className="add_review_title text-center fw-bold fs-1">Aggiungi qui la tua recensione:</h2>
      {/* nome utente che inserisce la recensione */}
      <label htmlFor="name">Nome:</label>
      <input onChange={handleChange} type="text" id="name" name="name" value={formData.name} required />
      {/* testo della recensione */}
      <label htmlFor="text">Recensione:</label>
      <textarea onChange={handleChange} id="text" name="text" rows="4" value={formData.text} />
      {/* voto della recensione */}
      <label htmlFor="vote">Voto:</label>
      <select onChange={handleChange} value={formData.vote} name="vote" id="vote">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {/* submit del form */}
      <button className="btn align-self-end">Invia</button>
    </form>
  );
}
