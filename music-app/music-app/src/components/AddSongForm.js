import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const AddSongForm = () => {

    const dispatch = useDispatch();

    const { activeList } = useSelector(state => ({
        activeList: state.music.activePlaylist.playlist.songs
    }));


    const { songs } = useSelector(state => ({
        songs: state.music.songs
    }));

    let availSongs = songs;
    for (let n of activeList) {
        availSongs = availSongs.filter(x => x.id !== n.id)
    }
    console.log(availSongs)



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
                        <hr />
                    </div>
                ))}
            </ul>
            <br />

            <div><h2>Available Songs</h2></div>
            <ul className="list-group">
                {availSongs.map(p => (
                    <div key={p.id}>
                        <h3>
                            <i className="fas fa-plus"></i> {p.title}
                            {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
                        </h3>
                        <hr />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default withRouter(AddSongForm);