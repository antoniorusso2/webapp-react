import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">home</Route>
        <Route path="/books/:id">pagina libro dettaglio</Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
