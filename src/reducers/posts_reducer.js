import { FETCH_POSTS } from '../actions';

const posts = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}

export default posts;
