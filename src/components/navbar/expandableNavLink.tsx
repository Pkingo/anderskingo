import React, { ReactElement, useContext, useRef } from 'react';
import NavLink, { ILink } from './navLink';
import { NavbarContext, Actions } from './navbarContext';

import useOutsideClick from '../../hooks/useOutsideClick';

interface IExpandableNavLink {
  titel: string;
  navLinks: ILink[];
  action: Actions;
  expanded: boolean;
}

const ExpandableNavLink = ({
  titel,
  navLinks,
  action,
  expanded
}: IExpandableNavLink): ReactElement => {
  const { dispatch } = useContext(NavbarContext);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () =>
    expanded ? dispatch(Actions.HideMenu) : dispatch(action);
  return (
    <div ref={ref}>
      <div className="nav-link" onClick={toggle}>
        {titel}
      </div>
      {expanded && (
        <ul className="navmenu-submenu">
          {navLinks.map(link => (
            <NavLink
              {...link}
              key={link.titel}
              onClick={() => dispatch(Actions.HideMenu)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableNavLink;
