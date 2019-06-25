import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PlaylistsList = () => {

  const { pList } = useSelector(state => ({
    pList: state.playlists.playlists
  }));

  // const renderPosts = (pList) => {
  //   return pList.map((p) => {
  //     return (
  //       <li className="list-group-item" key={p._id}>
  //         <Link style={{ color: 'black' }} to={"posts/" + p.id}>
  //           <h3 className="list-group-item-heading">{p.name}</h3>
  //         </Link>
  //       </li>
  //     );
  //   });
  // }

  // const { pList } = playlists;
  console.log(pList);

  return (
    <div className="container">
      <h1>Playlists</h1>
      <ul className="list-group">
      {pList.map((p, index) => (
        <div key={p.id}>
          <h3>
            <Link to={`/post/${p.id}`}>
              {p.name}
            </Link>
          </h3>
          <hr />
        </div>
      ))}
        {/* {renderPosts(pList)} */}
      </ul>
    </div>
  );
}

export default PlaylistsList;