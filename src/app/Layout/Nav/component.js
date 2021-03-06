import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top" />
      <button
        className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav" style={{ marginLeft: '10%' }}>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#iniziativa">
              l'iniziativa
            </a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#parole">
              Le parole
            </a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#pensiero">
              Lascia il tuo pensiero
            </a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#teatro">
              Un teatro per una comunità
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
