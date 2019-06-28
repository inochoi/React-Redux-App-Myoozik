import React from 'react';
import Library from '../components/Library';
import Home from '../components/Home';

const SongList = () => {

  return (
    <div className="container">
      <Home type="songlist" />
      <Library />
    </div>
  );
}

export default SongList;
