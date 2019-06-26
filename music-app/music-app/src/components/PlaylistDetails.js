import React, { useEffect } from 'react';
import { fetchPlaylist } from '../actions/playlists';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const PlaylistDetails = (props) => {

  const dispatch = useDispatch();

  const { activePlaylist } = useSelector(state => ({
    activePlaylist: state.music.activePlaylist
  }));

  const { pList } = useSelector(state => ({
    pList: state.music
  }));

  

  useEffect(() => {
    dispatch(fetchPlaylist(props.id));
  }, [dispatch, props.id])

  const { playlist } = activePlaylist;

  return playlist && (
    <div className="container">
      <h1>{playlist.name}</h1>
      <h4>{playlist.description}</h4>
      <br />
      {playlist.songs.map((p, index) => (
        <div key={p.id}>
          <i className="fas fa-play-circle"></i> <span className='songTitle'>{p.title}</span>
          <hr />
        </div>
      ))}
      <Link to={`/playlist/${playlist.id}/addsong`}>
        <i className="fas fa-plus-circle"></i>
      </Link>
    </div>

  );
}

export default PlaylistDetails;
