import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container-fluid px-5">
        <ul className="nav-bar-nav d-flex column-gap-4 py-4 fs-5">
          <li className="nav-item">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
