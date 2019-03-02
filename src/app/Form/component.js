import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange, onSubmit, values, isSubmitting, showForm, toggleForm }) => (
  <Fragment>
    {!showForm && (
      <div className="alert alert-dismissable alert-success fade show" role="alert">
        <strong>Grazie</strong> per averci detto di che cosa parli quando parli d'amore
        <button type="button" className="close" aria-label="Close" onClick={toggleForm}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )}
    {showForm && (
      <Fragment>
        <section id="contact">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0 pb-5">
              Qui ci andrebbe la domanda
            </h2>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message*</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="Message"
                        value={values.body}
                        onChange={onChange}
                        name="body"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>

                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={values.name}
                        onChange={onChange}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-xl"
                      onClick={onSubmit}
                      disabled={isSubmitting || values.body.length < 3}
                    >
                      Invia
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )}
  </Fragment>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
