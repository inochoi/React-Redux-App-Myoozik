import React, { useState } from 'react';
import { createPlaylist } from '../actions/playlists';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';


const PlaylistForm = (props) => {

    const dispatch = useDispatch();

    const initialState = {
        name: '',
        description: '',
        songs: []
    }

    const { songs } = useSelector(state => ({
        songs: state.music.songs
    }));

    const [state, setState] = useState(initialState);
    const [availSongs, setAvailSongs] = useState(songs);

    let availSongsArr = availSongs;
    for (let n of state.songs) {
        availSongsArr = availSongsArr.filter(x => x.id !== n.id)
    }



    const onChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const addSong = (idx) => {
        setState(
            {
                ...state,
                songs: [...state.songs, availSongsArr[idx]]
            }
        );
        setAvailSongs(availSongsArr)
    }

    const deleteSong = (idx) => {
        let copySong = state.songs.slice();
        let deleted = copySong.splice(idx, 1)[0];

        setState(
            {
                ...state,
                songs: copySong
            }
        );

        setAvailSongs([
            ...availSongsArr,
            deleted
        ])
    }



    const onSubmit = e => {
        e.preventDefault();
        let playlist = {
            id: uniqid(),
            name: state.name,
            description: state.description,
            songs: state.songs
        }

        dispatch(createPlaylist(playlist));
        setState(initialState);
        props.history.push('/');
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name='name' value={state.name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control" name='description' value={state.description} onChange={onChange} />
                </div>

                <div><label>Add songs here</label></div>
                <ul className="list-group">
                    {state.songs.map((p, index) => (
                        <div key={p.id}>
                            <h3>
                                <i className="fas fa-minus" onClick={() => { deleteSong(index) }}></i> {p.name}
                                {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
                            </h3>
                            <hr />
                        </div>
                    ))}
                </ul>
                <br />

                <div><label>Available Songs</label></div>
                <ul className="list-group">
                    {availSongsArr.map((p, index) => (
                        <div key={p.id}>
                            <h3>
                                <i className="fas fa-plus" onClick={() => { addSong(index) }}></i> {p.name}
                                {/* <button className="btn btn-danger float-right" onClick={() => dispatch(deletePlaylist(p.id))}>X</button> */}
                            </h3>
                            <hr />
                        </div>
                    ))}
                </ul>

                <button type="submit" className="btn btn-primary">Create Playlist</button>
            </form>
        </div>
    )
}

export default withRouter(PlaylistForm);
