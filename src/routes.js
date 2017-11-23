import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './components/App';
import PostIndex from './components/PostIndex';
import NewPost from './containers/NewPost';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route  path="posts/new" component={NewPost}/>
  </Route>
);
