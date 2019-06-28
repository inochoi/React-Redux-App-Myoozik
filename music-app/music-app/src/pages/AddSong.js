import React from 'react';
import AddSongForm from '../components/AddSongForm';
import Home from '../components/Home';

const AddSong = () => {

  return (
    <div className="container">
      <Home type="playlists_new" />
      <AddSongForm />
    </div>
  );
}

export default AddSong;