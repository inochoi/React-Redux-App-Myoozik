import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const AddSongForm = () => {

    const { activeList } = useSelector(state => ({
        activeList: state.music.activePlaylist.playlist.songs
    }));

    console.log(activeList);

    const { songs } = useSelector(state => ({
        songs: state.music.songs
    }));
    console.log(songs)


    return (
        <div>
            <div><h2>Add songs here</h2></div>
            <ul className="list-group">
                {activeList.map(p => (
                    <div key={p.id}>
                        <h3>
                            {p.title}
                            {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
                        </h3>
                        <div className="navbar-form navbar-right" style={{ paddingRight: '50px' }}>
                        </div>
                        <hr />
                    </div>
                ))}
            </ul>


            <ul className="list-group">
                {songs.map(p => (
                    <div key={p.id}>
                        <h3>
                            <i className="fas fa-plus"></i> {p.title}
                            {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
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

export default withRouter(AddSongForm);