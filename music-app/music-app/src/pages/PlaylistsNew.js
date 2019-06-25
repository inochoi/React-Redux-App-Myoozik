import React from 'react';
import Header from '../components/Header';
import PlaylistForm from '../components/PlaylistForm';

const PlaylistsNew = () => {

    return (
      <div className="container">
        <Header type="playlists_new"/>
        <PlaylistForm />
      </div>
    );
  }

export default PlaylistsNew;
