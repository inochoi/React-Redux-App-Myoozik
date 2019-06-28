import React, { useState, useEffect } from 'react';
import { createPlaylist, getSongs } from '../actions/playlists';
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

    useEffect(() => {
        dispatch(getSongs());
    }, [])

    const { songs } = useSelector(state => ({
        songs: state.music.data
    }));

    const [state, setState] = useState(initialState);
    // const [availSongs, setAvailSongs] = useState(songs);

    let availSongsArr = songs;
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
        // setAvailSongs(availSongsArr)
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

        // setAvailSongs([
        //     ...availSongsArr,
        //     deleted
        // ])
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
        props.history.push('/playlist');
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <br/>
                    <h2>Name</h2>
                    <input className="form-control" name='name' value={state.name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <h2>Description</h2>
                    <input className="form-control" name='description' value={state.description} onChange={onChange} />
                </div>
                <br/>

                <div><h2>Added Songs</h2></div>
                <br/>
                <ul className="list-group">
                    {state.songs.map((p, index) => (
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

                <button type="submit" className="btn btn-outline-success btn-lg">Create Playlist</button>
            </form>
        </div>
    )
}

export default withRouter(PlaylistForm);
