import React from 'react';
import Header from '../components/Header';
import PlaylistDetails from '../components/PlaylistDetails';

const PlaylistsShow = (props) => {

    return (
      <div className='container'>
        <Header type="playlists_show" postId={props.match.params.id}/>
        <PlaylistDetails id={props.match.params.id}/>
      </div>
    );
  }

export default PlaylistsShow;
