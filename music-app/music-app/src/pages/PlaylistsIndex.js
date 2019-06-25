import React from 'react';
import Header from '../components/Header';
import PlaylistsList from '../components/PlaylistsList';

const PlaylistsIndex = () => {

    return (
      <div className="container">
        <Header type="playlists_index"/>
        <PlaylistsList />
      </div>
    );
  }

export default PlaylistsIndex;
