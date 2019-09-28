import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { foredragSubmenu, kulturrejserSubmenu, projekterSubmenu } from './menu';
import NavLink from './navLink';
import ExpandableNavLink from './expandableNavLink';
import { Actions, NavbarContext } from './navbarContext';

const Navbar = () => {
  const { state, dispatch } = useContext(NavbarContext);
  const Links = () => (
    <React.Fragment>
      <NavLink titel="Hjem" to="/" />
      <ExpandableNavLink
        expanded={state.showForedrag}
        action={Actions.ExpandForedrag}
        titel="Foredrag"
        navLinks={foredragSubmenu}
      />
      <ExpandableNavLink
        expanded={state.showKulturrejser}
        action={Actions.ExpandKulturejser}
        titel="Kulturrejser"
        navLinks={kulturrejserSubmenu}
      />
      <ExpandableNavLink
        expanded={state.showProjekter}
        action={Actions.ExpandProjekter}
        titel="Mine Projekter"
        navLinks={projekterSubmenu}
      />
      <NavLink titel="Publikationer" to="/publikationer" />
      <NavLink titel="Kontakt" to="/kontakt" />
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <div className="mobile-only">
        {state.showMenu ? (
          <React.Fragment>
            <i
              className="mobile-icon fas fa-times"
              onClick={() => dispatch(Actions.HideMenu)}
            />
            <div className="mobile-navbar">
              <Links />
            </div>
          </React.Fragment>
        ) : (
          <i
            className="mobile-icon fas fa-bars"
            onClick={() => dispatch(Actions.ShowMenu)}
          />
        )}
      </div>
      <ul className="navbar desktop-only">
        <Link className="navbar-link navbar-brand" to="/">
          Anders Kingo
        </Link>
        <div className="desktop-navbar">
          <Links />
        </div>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
