import React from 'react';
import Header from '../components/Header';
import PostsList from '../components/PostsList';

const PostsIndex = () => {

    return (
      <div className="container">
        <Header type="posts_index"/>
        <PostsList />
      </div>
    );
  }

export default PostsIndex;
