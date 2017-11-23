import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form'

const NewPost = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="new-post">
      <h3 className="title">Create a new Post!</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="categories">Categories</label>
        <Field name="categories" component="input" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="contents">Contents</label>
        <Field name="contents" component="textarea" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default reduxForm({
  form: 'NewPost'
})(NewPost);
