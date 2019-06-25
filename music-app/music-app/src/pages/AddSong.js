import React from 'react';
import Header from '../components/Header';
import AddSongForm from '../components/AddSongForm';

const AddSong = () => {

    return (
      <div className="container">
        <Header type="playlists_new"/>
        <AddSongForm />
      </div>
    );
  }

export default AddSong;