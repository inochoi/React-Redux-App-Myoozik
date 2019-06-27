import React from 'react';
import Header from '../components/Header';
import Library from '../components/Library';

const SongList = () => {

  return (
    <div className="container">
      <Header type="songlist" /> 
      <Library />
    </div>
  );
}

export default SongList;
