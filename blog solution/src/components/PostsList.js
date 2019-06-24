import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PostsList = () => {

  const { postsList } = useSelector(state => ({
    postsList: state.posts.postsList
  }));

  const renderPosts = (posts) => {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post._id}>
          <Link style={{ color: 'black' }} to={"posts/" + post._id}>
            <h3 className="list-group-item-heading">{post.title}</h3>
          </Link>
          {post.categories}
        </li>
      );
    });
  }

  const { posts } = postsList;

  return (
    <div className="container">
      <h1>Posts</h1>
      <ul className="list-group">
        {renderPosts(posts)}
      </ul>
    </div>
  );
}

export default PostsList;