import React, { ReactElement, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext, Actions } from './navbarContext';

export interface ILink {
  titel: string;
  to: string;
  onClick?: () => void;
}

const NavLink = ({ titel, to, onClick }: ILink): ReactElement => {
  const { dispatch } = useContext(NavbarContext);
  const pressed = () => {
    if (onClick) onClick();
    dispatch(Actions.HideMenu);
  };
  return (
    <Link key={titel} className="nav-link" to={to} onClick={pressed}>
      {titel}
    </Link>
  );
};

export default NavLink;
