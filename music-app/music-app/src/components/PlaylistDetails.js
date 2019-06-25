import React, { useEffect } from 'react';
import { fetchPlaylist } from '../actions/playlists';
import { useSelector, useDispatch } from 'react-redux';

const PlaylistDetails = (props) => {

  const dispatch = useDispatch();

  const { activePlaylist } = useSelector(state => ({
    activePlaylist: state.music.activePlaylist
  }));

  useEffect(() => {
    dispatch(fetchPlaylist(props.id));
  }, [dispatch, props.id])

  const { playlist } = activePlaylist;

  return playlist && (
    <div className="container">
      <h3>{playlist.name}</h3>
      <h6>Description: {playlist.description}</h6>
    </div>
  );
}

export default PlaylistDetails;
