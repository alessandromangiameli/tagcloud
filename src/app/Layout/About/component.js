import React from 'react';

const About = () => (
  <section className="bg-primary text-white mb-0" id="iniziativa">
    <div className="container mt-5">
      <h2 className="text-center text-uppercase text-white pb-5 pt-5">Lorem ipsum</h2>
      <div className="row">
        <div className="col-lg-4 ml-auto">
          <p className="lead">
            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
            the complete source files including HTML, CSS, and JavaScript as well as optional LESS
            stylesheets for easy customization.
          </p>
        </div>
        <div className="col-lg-4 mr-auto">
          <p className="lead">
            Whether you're a student looking to showcase your work, a professional looking to
            attract clients, or a graphic artist looking to share your projects, this template is
            the perfect starting point!
          </p>
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
