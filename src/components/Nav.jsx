import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="navbar justify-content-start column-gap-4">
      <li className="nav-item">
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
    </ul>
  );
}
