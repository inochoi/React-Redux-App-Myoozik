import React from 'react';
import PlaylistForm from '../components/PlaylistForm';
import Home from '../components/Home';

const PlaylistsNew = () => {

  return (
    <div className="container">
      <Home type="playlists_new" />
      <PlaylistForm />
    </div>
  );
}

export default PlaylistsNew;
