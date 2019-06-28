import React, { useState, useEffect } from "react";
import { getSongs } from "../actions/playlists";
import { useDispatch, useSelector } from "react-redux";

const SongDetails = props => {

  let index;
  let song = {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, []);

  const { songList } = useSelector(state => ({
    songList: state.music.data
  }));

  index = songList.findIndex(p => p.id === props.id);
  song = songList[index];

  return (
    songList && (
      <div className="jumbotron">
        <div>
          <h1>{song.name}</h1>
        </div>
        <div>
          <img
            id="cover"
            src={`https://api.napster.com/imageserver/v2/albums/${
              song.albumId
            }/images/500x500.jpg`}
          />
        </div>
        <div>
          <audio src={`${song.previewURL}`} controls className="align-bottom" />

        </div>
        <br />
        <div>{song.artistName}</div>
        <div>{song.albumName}</div>
      </div>
    )
  );
};

export default SongDetails;
