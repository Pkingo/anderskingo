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
              <Link className="nav-link" to="/">
                Hjem
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Foredrag
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="nav-link" to="/foredrag/elske">
                  At elske sin næste
                </Link>
                <Link className="nav-link" to="/foredrag/folkelige">
                  Den folkelige og enfoldige Kierkegaard
                </Link>
                <Link className="nav-link" to="/foredrag/mennesket">
                  Mennesket er ånd
                </Link>
                <Link className="nav-link" to="/foredrag/cohen">
                  Kierkegaard – Cohen – kristendom
                </Link>
                <Link className="nav-link" to="/foredrag/valget">
                  Valget
                </Link>
                <Link className="nav-link" to="/foredrag/enhver">
                  Bliver enhver salig i sin tro?
                </Link>
                <Link className="nav-link" to="/foredrag/tvivl">
                  Den frelsende tvivl
                </Link>
                <Link className="nav-link" to="/foredrag/abraham">
                  Abraham – troens fader
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kulturrejser"></Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kulturrejser
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="nav-link" to="/kulturrejser/kulturrejse">
                  Kulturrejse
                </Link>
                <Link className="nav-link" to="/kulturrejser/program">
                  Program 2018
                </Link>
                <Link className="nav-link" to="/kulturrejser/tilmelding">
                  Tilmelding
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mine Projekter
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="nav-link" to="/projekter/sanselighed">
                  Ånd og Sanselighed
                </Link>
                <Link className="nav-link" to="/projekter/herrnhuterne">
                  Søren Kierkegaard og herrnhuterne
                </Link>
                <Link className="nav-link" to="/projekter/terapi">
                  Terapi og sjælesorg
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/publukationer">
                Publikationer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontakt">
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
