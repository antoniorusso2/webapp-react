import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import GlobalContext from '../contexts/globalContext';
import Loader from '../components/Loader';

export default function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Loader />}
    </>
  );
}
