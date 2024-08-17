import React from 'react';
import { NavLink } from 'react-router-dom';
import 'src/css/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
          <li><NavLink to="/team" activeClassName="active">Team</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
