import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-light warning-color lighten-5">
    <ul className="navbar-nav mr-auto">
      <li>
        <Link to={'/'} className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to={'/addRecipe'} className="nav-link">
          Add a recipe
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
