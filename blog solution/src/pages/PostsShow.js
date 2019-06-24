import React from 'react';
import Header from '../components/Header';
import PostDetails from '../components/PostDetails';

const PostsShow = () => {

    return (
      <div className='container'>
        <Header type="posts_show" postId={this.props.match.params.id}/>
        <PostDetails id={this.props.match.params.id}/>
      </div>
    );
  }

export default PostsShow;
