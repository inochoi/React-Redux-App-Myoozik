import { combineReducers } from 'redux';
import PlaylistsReducer from './reducer_playlists';

const rootReducer = combineReducers({
  music: PlaylistsReducer, //<-- Posts
});

export default rootReducer;
