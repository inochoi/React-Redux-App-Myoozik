import React, { useState } from 'react';
import { createPlaylist } from '../actions/playlists';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';


const PlaylistForm = (props) => {

    const dispatch = useDispatch();

    const initialState = {
        name: '',
        description: ''
    }

    const [state, setState] = useState(initialState);

    const onChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        let playlist = {
            id: uniqid(),
            name: state.name,
            description: state.description
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
                <button type="submit" className="btn btn-primary">Create Playlist</button>
            </form>
        </div>
    )
}

export default withRouter(PlaylistForm);
