import React from 'react';
import Header from '../components/Header';
import PostDetails from '../components/PostDetails';

const PostsShow = (props) => {

    return (
      <div className='container'>
        <Header type="posts_show" postId={props.match.params.id}/>
        <PostDetails id={props.match.params.id}/>
      </div>
    );
  }

export default PostsShow;
