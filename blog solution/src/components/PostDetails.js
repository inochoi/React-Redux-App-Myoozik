import React, { useEffect } from 'react';
import { fetchPost } from '../actions/posts';
import { useSelector, useDispatch } from 'react-redux';

const PostDetails = (props) => {

  const dispatch = useDispatch();

  const { activePost } = useSelector(state => ({
    activePost: state.posts.activePost
  }));

  useEffect(() => {
    dispatch(fetchPost(props.id));
  }, [dispatch, props.id])

  const { post } = activePost;

  return post && (
    <div className="container">
      <h3>{post.title}</h3>
      <h6>Categories: {post.categories}</h6>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;
