import React from 'react';
import Header from '../components/Header';
import PostsForm from '../components/PostsForm';

const PostsNew = () => {

    return (
      <div className="container">
        <Header type="posts_new"/>
        <PostsForm />
      </div>
    );
  }

export default PostsNew;
