import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange, onSubmit, values, isSubmitting, showForm, toggleForm }) => (
  <section id="pensiero">
    {!showForm && (
      <div style={{ width: '60%', margin: '0 20%' }} className="pb-5 pt-5">
        <div className="alert alert-dismissable alert-success fade show" role="alert">
          <strong>Grazie</strong> per averci detto di che cosa parli quando parli d'amore
          <button type="button" className="close" aria-label="Close" onClick={toggleForm}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )}
    {showForm && (
      <Fragment>
        <section id="contact" className="pt-0">
          <div className="container">
            {false && (
              <h2 className="text-center text-uppercase text-secondary mb-0 pb-5">
                Qui ci andrebbe la domanda
              </h2>
            )}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form name="sentMessage" id="contactForm">
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label />
                      <textarea
                        className="form-control"
                        id="message"
                        rows="1"
                        placeholder="Qui dovremmo inserire la domanda da fare"
                        value={values.body}
                        onChange={onChange}
                        name="body"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>

                  {false && (
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
                  )}
                  <div className="form-group pt-5">
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
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
