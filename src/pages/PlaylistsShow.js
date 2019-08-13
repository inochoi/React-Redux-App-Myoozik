import React from 'react';
import PlaylistDetails from '../components/PlaylistDetails';
import Home from '../components/Home';

const PlaylistsShow = (props) => {

  return (
    <div className='container'>
      <Home type="playlists_show" pId={props.match.params.id} />
      <PlaylistDetails id={props.match.params.id} />
    </div>
  );
}

export default PlaylistsShow;
