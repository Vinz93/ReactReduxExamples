import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const { posts } = this.props;
    return posts.map(post =>{
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <p>{post.title}</p>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            add Post
          </Link>
        </div>
        <ul className="list-group posts-list">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.all,
})

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
