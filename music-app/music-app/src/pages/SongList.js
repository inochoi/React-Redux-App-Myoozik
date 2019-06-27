import React from 'react';
import Header from '../components/Header';
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
