import React, { ReactNode } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

// Components
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';

// Pages
import Home from '../pages/home';
import Foredrag from '../pages/foredrag';
import Kulturrejser from '../pages/kulturrejser';
import MineProjekter from '../pages/projekter';
import Publikationer from '../pages/publikationer';
import Contact from '../pages/contact';

const Layout = () => {
  const browserHistory = createBrowserHistory();
  return (
    <div className="body-grid">
      <Router history={browserHistory}>
        <Navbar />
        <Header />
        <div className="page-grid">
          <Route path="/" exact component={Home} />
          <Route path="/foredrag/:id" component={Foredrag} />
          <Route path="/kulturrejser/:id" component={Kulturrejser} />
          <Route path="/projekter/:id" component={MineProjekter} />
          <Route path="/publukationer" component={Publikationer} />
          <Route path="/kontakt" component={Contact} />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Layout;
