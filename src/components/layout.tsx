import React, { ReactNode } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

// Components
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';

// Pages
import Home from '../pages/home';
import Contact from '../pages/contact';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const browserHistory = createBrowserHistory();
  return (
    <Router history={browserHistory}>
      <Navbar />
      <div className="container body-container">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/kontakt" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
