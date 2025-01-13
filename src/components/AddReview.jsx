export default function AddReview() {
  return (
    <form className="add_review">
      {/* nome utente che inserisce la recensione */}
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name" required />

      {/* testo della recensione */}
      <label htmlFor="text">Recensione:</label>
      <textarea id="text" name="text" rows="4" required />

      {/* voto della recensione */}
      <label htmlFor="vote">Voto:</label>
      <select name="vote" id="vote">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="2">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      {/* submit del form */}
      <button className="btn align-self-end">Invia</button>
    </form>
  );
}
