import React from 'react';
import PlaylistsList from '../components/PlaylistsList';
import { Link } from 'react-router-dom';
import Home from '../components/Home';

const PlaylistsIndex = () => {

  return (
    <div className="container">
      <Home type="playlists_index" />
      <PlaylistsList />
      <Link to="/playlist/new">
      <button className="btn btn-outline-primary text-center addPlaylist"><i className="fas fa-plus addPlaylistIcon"></i></button>
      </Link>
    </div>
  );
}

export default PlaylistsIndex;
