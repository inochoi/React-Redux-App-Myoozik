import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetDeletedPlaylist, deletePlaylist } from '../actions/playlists';

const PlaylistsList = (props) => {

  const dispatch = useDispatch();

  const { deletedPlaylist } = useSelector(state => ({
    deletedPlaylist: state.music.deletedPlaylist
  }));

  const { pList } = useSelector(state => ({
    pList: state.music.playlists
  }));

  if (deletedPlaylist.playlist) {
    dispatch(resetDeletedPlaylist());
  }


  return (
    <div className="container">
      <br/>
      <h1>Playlists</h1>
      <br />
      <ul className="list-group">
        {pList.map((p, index) => (
          <div key={p.id}>
            <h3>
              <Link to={`/playlist/${p.id}`}>
                {p.name}
              </Link>
              <button id='deletePlaylist' className="btn btn-outline-danger text-center deleteSong" onClick={() => dispatch(deletePlaylist(p.id))}><i className="fas fa-minus deleteSongIcon"></i></button>

            </h3>
            <div className="navbar-form navbar-right" style={{ paddingRight: '50px' }}>
            </div>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistsList;