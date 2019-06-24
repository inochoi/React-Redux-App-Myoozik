import React, { useState } from 'react';
import { createPost } from '../actions/posts';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';


const PostsForm = (props) => {

    const dispatch = useDispatch();

    const initialState = {
        title: '',
        categories: '',
        content: ''
    }

    const [state, setState] = useState(initialState);

    const onChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        let post = {
            _id: uniqid(),
            title: state.title,
            categories: state.categories,
            content: state.content
        }

        dispatch(createPost(post));
        setState(initialState);
        props.history.push('/');
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>TItle</label>
                    <input className="form-control" name='title' value={state.title} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input className="form-control" name='categories' value={state.categories} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <input className="form-control" name='content' value={state.content} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(PostsForm);
