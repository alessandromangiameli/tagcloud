import React, { Fragment } from 'react';

const Footer = () => (
  <Fragment>
    <footer className="footer" id="teatro ">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Un Teatro per una comunità</h4>

            <p className="lead">
              “UN TEATRO PER UNA COMUNITÀ” è il progetto di attivazione della comunità di prossimità
              del Polo del '900 ideato e organizzato dalla Rete Italiana di Cultura Popolare, che
              vede la partecipazione di organizzazioni, scuole, famiglie, studenti, singoli
              cittadini e tessuto produttivo. <br />I dispositivi performativi hanno il compito di
              praticare azioni di coinvolgimento e ascolto, fino a stimolare l'implementazioni di
              nuove reti di relazioni in un sistema di partecipazione dal basso. <br />
              “L'oggetto” culturale assume quindi il significato di una nuova ricerca, dove prendono
              vita appuntamenti condivisi fino all’ospitalità di quartiere. <br />
              Grazie anche alla collaborazione con il Convitto Nazionale Umberto I "Un teatro per
              una comunità" può agire attraverso il meccanismo delle residenze leggere.
            </p>
            <p className="lead mb-0">
              Il progetto viene realizzato grazie al contributo della Fondazione Polo del '900.
            </p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Un progetto di</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className=" btn-social" href="#">
                  <img src="/images/polo.png" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className=" btn-social" href="#">
                  <img src="/images/spaccio.png" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className=" btn-social" href="#">
                  <img src="/images/rete.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    {false && (
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2019</small>
        </div>
      </div>
    )}
  </Fragment>
);

export default Footer;
