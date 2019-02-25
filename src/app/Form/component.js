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
      <form className="form-inline">
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            value={values.body}
            onChange={onChange}
            name="body"
          />
          <button
            onClick={onSubmit}
            disabled={isSubmitting || values.body.length < 3}
            className="btn btn-success btn-lg"
          >
            Invia
          </button>
        </div>
      </form>
    )}
  </Fragment>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default Form;
