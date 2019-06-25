import React from 'react';
import Header from '../components/Header';
import PlaylistsList from '../components/PlaylistsList';
import {Link} from 'react-router-dom';

const PlaylistsIndex = () => {

  return (
    <div className="container">
      <Header type="playlists_index" />
      <PlaylistsList />
      <Link to="/playlist/new">
        <i className="fas fa-plus-circle"></i>
      </Link>
    </div>
  );
}

export default PlaylistsIndex;
