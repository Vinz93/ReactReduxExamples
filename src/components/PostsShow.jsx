import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentWillMount() {
    const { fetchPost, params: { id} } = this.props;
    fetchPost(id);
  }
  onDelete() {
    const { deletePost, post } = this.props;
    deletePost(post.id)
    .then(() => browserHistory.push('/'));
  }
  render() {
    const { post } = this.props;
    if(!post) {
      return <div>Loading...</div>
    }
    return (
      <div className="container">
        <Link to='/'>Go back!</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDelete.bind(this)}>Delete</button>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post,
})
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
