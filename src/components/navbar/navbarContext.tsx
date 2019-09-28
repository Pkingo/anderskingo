import React, { createContext, useReducer } from 'react';

interface State {
  showMenu: boolean;
  showForedrag: boolean;
  showKulturrejser: boolean;
  showProjekter: boolean;
}

export enum Actions {
  ExpandForedrag = 'EXPAND_FOREDRAG',
  ExpandKulturejser = 'EXPAND_KULTURREJSER',
  ExpandProjekter = 'EXPAND_PROJEKTER',
  ShowMenu = 'SHOW_MENU',
  HideMenu = 'HIDE_MENU'
}

const initialState: State = {
  showMenu: false,
  showForedrag: false,
  showKulturrejser: false,
  showProjekter: false
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action) {
    case Actions.ExpandForedrag:
      return {
        ...state,
        showForedrag: true,
        showKulturrejser: false,
        showProjekter: false
      };
    case Actions.ExpandKulturejser:
      return {
        ...state,
        showForedrag: false,
        showKulturrejser: true,
        showProjekter: false
      };
    case Actions.ExpandProjekter:
      return {
        ...state,
        showForedrag: false,
        showKulturrejser: false,
        showProjekter: true
      };
    case Actions.ShowMenu:
      return {
        ...state,
        showMenu: true,
        showForedrag: false,
        showKulturrejser: false,
        showProjekter: false
      };
    case Actions.HideMenu:
      return {
        ...state,
        showMenu: false,
        showForedrag: false,
        showKulturrejser: false,
        showProjekter: false
      };
  }
};

const NavbarContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Actions>;
    }
  | any
>({ state: initialState });

function NavbarProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NavbarContext.Provider>
  );
}

export { NavbarContext, NavbarProvider };
