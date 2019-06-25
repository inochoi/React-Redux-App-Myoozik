import { combineReducers } from 'redux';
import PostsReducer from './reducer_playlists';

const rootReducer = combineReducers({
  posts: PostsReducer, //<-- Posts
});

export default rootReducer;
