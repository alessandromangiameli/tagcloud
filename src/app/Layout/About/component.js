import React from 'react';

const About = () => (
  <section className="bg-primary text-white mb-0" id="iniziativa">
    <div className="container mt-5">
      <h3 className="text-center text-uppercase text-white pb-5 pt-5">
        A quante cose diamo il nome di amore?
      </h3>
      <div className="row">
        <div className="col-lg-8 offset-2">
          <p className="lead">
            Ad un chimico, reso celebre prima da una poesia e poi da una canzone, non è dato di
            capire il gioco attraverso cui gli uomini si combinano e reagiscono tra loro. Quel gioco
            è l’amore e quel chimico, forse, siamo noi. Lo siamo nella misura in cui ci è difficile,
            se non riconoscere l’amore, almeno parlarne.
          </p>
          <p className="lead">
            Ci occorrono le parole per parlare d’amore, e per trovarle attingiamo continuamente agli
            immaginari dell’arte, della letteratura e della musica, fino a far nostre quelle parole.
          </p>
          <p className="lead">
            Lo abbiamo fatto anche qui, cominciando con una citazione. E proseguiremo ancora con una
            citazione: di che cosa parliamo quando parliamo d’amore? Aiutaci con una parola, un
            pensiero, una canzone o una poesia, a trovare le parole giuste per costruire insieme la
            risposta.
          </p>
        </div>
        <div className="col-lg-4 mr-auto">
          <p className="lead" />
        </div>
      </div>
      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light js-scroll-trigger" href="#pensiero">
          <i className="fas fa-download mr-2" />
          lascia il tuo pensiero
        </a>
      </div>
    </div>
  </section>
);

export default About;
