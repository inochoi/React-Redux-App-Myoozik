import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {updatePlaylist} from '../actions/playlists';



const AddSongForm = (props) => {

    const dispatch = useDispatch();

    const { activeList } = useSelector(state => ({
        activeList: state.music.activePlaylist.playlist.songs
    }));

    const { activeListPlaylist } = useSelector(state => ({
        activeListPlaylist: state.music.activePlaylist.playlist
    }));


    const { songs } = useSelector(state => ({
        songs: state.music.songs
    }));

    const [state, setState] = useState(activeList);
    const [availSongs, setAvailSongs] = useState(songs);


    let availSongsArr = availSongs;
    for (let n of state) {
        availSongsArr = availSongsArr.filter(x => x.id !== n.id)
    }

    console.log('totals songs avail: ')
    console.log(availSongs)
    console.log('songs on current playlist: ')
    console.log(state);
    console.log('songs avail to add: ')
    console.log(availSongsArr)

    const addSong = (idx) => {
        setState([

            ...state, availSongsArr[idx]
        ]);

        setAvailSongs(availSongsArr)

    }

    const deleteSong = (idx) => {
        let copySong = state.slice();
        let deleted = copySong.splice(idx, 1)[0];

        setState(
            copySong
        );

        setAvailSongs([
            ...availSongsArr,
            deleted
        ]
        )
    }

    const onSubmit = e => {
        e.preventDefault();

        let updatedList = ({
            ...activeListPlaylist,
            songs: state
        }
        )


        dispatch(updatePlaylist(updatedList));
        props.history.push(`/playlist/${activeListPlaylist.id}`);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div><h2>Add songs here</h2></div>
                <ul className="list-group">
                    {state.map((p, index) => (
                        <div key={p.id}>
                            <h3>
                                <i className="fas fa-minus" onClick={() => { deleteSong(index) }}></i> {p.title}
                                {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
                            </h3>
                            <hr />
                        </div>
                    ))}
                </ul>
                <br />

                <div><h2>Available Songs</h2></div>
                <ul className="list-group">
                    {availSongsArr.map((p, index) => (
                        <div key={p.id}>
                            <h3>
                                <i className="fas fa-plus" onClick={() => { addSong(index) }}></i> {p.title}
                                {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
                            </h3>
                            <hr />
                        </div>
                    ))}
                </ul>
                <div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(AddSongForm);