import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand dekstop-only" to="/">
          Anders Kingo
        </Link>
        <button
          className="navbar-toggler burger-icon__button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars burger-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Hjem
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
