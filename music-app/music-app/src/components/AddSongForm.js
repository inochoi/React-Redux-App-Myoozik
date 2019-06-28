import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlaylist, getSongs } from '../actions/playlists';



const AddSongForm = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [])

    const { activeList } = useSelector(state => ({
        activeList: state.music.activePlaylist.playlist.songs
    }));

    const { activeListPlaylist } = useSelector(state => ({
        activeListPlaylist: state.music.activePlaylist.playlist
    }));


    const { songs } = useSelector(state => ({
        songs: state.music.data
    }));

    const [state, setState] = useState(activeList);
    const [availSongs, setAvailSongs] = useState(songs);


    let availSongsArr = songs;
    for (let n of state) {
        availSongsArr = availSongsArr.filter(x => x.id !== n.id)
    }


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
                <br/>
                <ul className="list-group">
                    {state.map((p, index) => (
                        <div key={p.id}>
                            <h3>
                                <button className="btn btn-outline-danger text-center deleteSong" onClick={() => { deleteSong(index) }}><i className="fas fa-minus deleteSongIcon"></i></button> {p.name}
                            </h3>
                            <hr />
                        </div>
                    ))}
                </ul>
                <br />

                <div><h2>Available Songs</h2></div>
                <br/>
                <ul className="list-group">
                    {availSongsArr.map((p, index) => (
                        <div key={p.id}>
                            <h3>
                                <button className="btn btn-outline-primary text-center addSong" onClick={() => { addSong(index) }}><i className="fas fa-plus addSongIcon"></i></button> {p.name}

                            </h3>
                            <hr />
                        </div>
                    ))}
                </ul>
                <div>
                    <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(AddSongForm);