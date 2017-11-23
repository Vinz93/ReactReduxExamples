import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            add Post
          </Link>
        </div>
        List of Posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);
