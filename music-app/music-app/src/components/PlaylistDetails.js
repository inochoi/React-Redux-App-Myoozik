import React, { useEffect } from 'react';
import { fetchPlaylist } from '../actions/playlists';
import { useSelector, useDispatch } from 'react-redux';

const PlaylistDetails = (props) => {

  const dispatch = useDispatch();

  const { activePlaylist } = useSelector(state => ({
    activePlaylist: state.posts.activePlaylist
  }));

  useEffect(() => {
    dispatch(fetchPlaylist(props.id));
  }, [dispatch, props.id])

  const { playlist } = activePlaylist;

  return playlist && (
    <div className="container">
      <h3>{playlist.title}</h3>
      <h6>Categories: {playlist.categories}</h6>
      <p>{playlist.content}</p>
    </div>
  );
}

export default PlaylistDetails;
