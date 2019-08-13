import React from 'react';
import SongDetails from '../components/SongDetails';
import Home from '../components/Home';

const SongInfo = (props) => {

  return (
    <div className="container">
      <Home type="song-info" />
      <SongDetails id={props.match.params.id} />
    </div>
  );
}

export default SongInfo;