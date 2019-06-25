import { combineReducers } from 'redux';
import PlaylistsReducer from './reducer_playlists';

const rootReducer = combineReducers({
  playlists: PlaylistsReducer, //<-- Posts
});

export default rootReducer;
