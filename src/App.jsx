import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import MovieDetails from './pages/MovieDetails';
import About from './pages/About';
import HomePage from './pages/Home';
import GlobalContext from './contexts/globalContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies/:id" element={<MovieDetails />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
export default App;
