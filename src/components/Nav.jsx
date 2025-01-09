import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="container">
      <div className="navbar">
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/contacts'}>contacts</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
