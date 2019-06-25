import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PlaylistsList = () => {

  const { playlists } = useSelector(state => ({
    playlists: state.playlists
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

  const { pList } = playlists;

  return (
    <div className="container">
      <h1>Posts</h1>
      <ul className="list-group">
        {renderPosts(pList)}
      </ul>
    </div>
  );
}

export default PlaylistsList;