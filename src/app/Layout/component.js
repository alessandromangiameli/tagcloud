import React, { Fragment } from 'react';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';

const Layout = ({ children, ...rest }) => (
  <Fragment>
    <Nav />
    <About />
    {children}
    <Footer />
  </Fragment>
);

export default Layout;
