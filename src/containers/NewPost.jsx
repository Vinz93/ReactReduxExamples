import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { createPost } from '../actions';
import FormField from '../components/FormField';

const NewPost = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="new-post">
      <h3 className="title">Create a new Post!</h3>
      <Field name="title" label="Title" component={FormField} type="text"  />
      <Field name="categories" label="Categories" component={FormField} type="text"  />
      <Field name="content" label="Content" component={FormField} type="text" textarea={true} />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 4) {
    errors.title = 'too short';
  };
  if (!values.categories) {
    errors.categories = 'Required';
  }
  if (!values.content) {
    errors.content = 'Required';
  } else if (values.content.length < 4) {
    errors.content = 'too short';
  };
  return errors;
}

export default reduxForm({
  form: 'NewPost',
  onSubmit: createPost,
  validate
})(NewPost);
