import React, { useState, useEffect } from "react";
import { getSongs } from "../actions/playlists";
import { useDispatch, useSelector } from "react-redux";
// import Home from "../components/Home";

const SongDetails = props => {
  const initialState = {
    playingUrl: "",
    audio: null,
    playing: false
  };

  const [music, setMusic] = useState(initialState);

  const playMusic = previewUrl => {
    let audio = new Audio(previewUrl);
    let newMusic = {};
    if (!music.playing) {
      audio.play();

      newMusic.playing = true;
      newMusic.playingUrl = previewUrl;
      newMusic.audio = audio;
    } else if (music.playingUrl === previewUrl) {
      music.audio.pause();
      newMusic.playing = false;
    } else {
      music.audio.pause();
      audio.play();
      newMusic.playing = true;
      newMusic.playingUrl = previewUrl;
      newMusic.audio = audio;
    }

    setMusic(newMusic);

    audio.addEventListener("ended", function() {
      setMusic(initialState);
    });
  };

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

  console.log(props.id);
  console.log(songList);
  console.log(index);
  console.log(song);

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
