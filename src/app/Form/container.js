import React from 'react';
import { Formik } from 'formik';
import { compose, withState, withHandlers } from 'recompose';

import PostContext from '../PostContext';

import { add } from '../../services/post';
import Form from './component';

const FormContainer = ({ showForm, toggleForm }) => (
  <PostContext.Consumer>
    {({ fetch }) => (
      <Formik
        initialValues={{
          body: '',
        }}
        onSubmit={(values) => {
          add(values, (doc) => {
            fetch();
            toggleForm();
          });
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <Form
            onChange={handleChange}
            onSubmit={handleSubmit}
            values={values}
            isSubmitting={isSubmitting}
            showForm={showForm}
            toggleForm={toggleForm}
          />
        )}
      </Formik>
    )}
  </PostContext.Consumer>
);

export default compose(
  withState('showForm', 'setShowForm', true),
  withHandlers({
    toggleForm: (props) => props.setShowForm(!props.showForm),
  }),
)(FormContainer);
