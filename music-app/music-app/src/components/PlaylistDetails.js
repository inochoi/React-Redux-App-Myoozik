import React, { useEffect, useState } from 'react';
import { fetchPlaylist } from '../actions/playlists';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const PlaylistDetails = (props) => {

  const initialState = {
    playingUrl: '',
    audio: null,
    playing: false
  }

  const [music, setMusic] = useState(initialState);

  const playMusic = (previewUrl) => {
    console.log('play');
    let audio = new Audio(previewUrl);
    let newMusic = {};
    if (!music.playing) {
      audio.play();

      newMusic.playing = true;
      newMusic.playingUrl = previewUrl;
      newMusic.audio = audio;
    }
    else if (music.playingUrl === previewUrl) {
      music.audio.pause();
      newMusic.playing = false;
    }
    else {
      music.audio.pause();
      audio.play();
      newMusic.playing = true;
      newMusic.playingUrl = previewUrl;
      newMusic.audio = audio;
    }

    setMusic(newMusic);

    audio.addEventListener("ended", function () {
      console.log('music ended');
      setMusic(initialState);
    });

  }





  const dispatch = useDispatch();

  const { activePlaylist } = useSelector(state => ({
    activePlaylist: state.music.activePlaylist
  }));

  const { pList } = useSelector(state => ({
    pList: state.music
  }));



  useEffect(() => {
    dispatch(fetchPlaylist(props.id));
  }, [dispatch, props.id])

  const { playlist } = activePlaylist;

  return playlist && (
    <div className="container">
      <h1>{playlist.name}</h1>
      <h4>{playlist.description}</h4>
      <br />
      {playlist.songs.map((p, index) => (
        <div key={p.id}>
          {music.playingUrl === p.previewURL
            ? <span className="toPlay" onClick={() => playMusic(p.previewURL)}><i className="fas fa-pause-circle"></i></span>
            : <span className="toPlay" onClick={() => playMusic(p.previewURL)} ><i className="fas fa-play-circle"></i></span>}
          {/* <i className="fas fa-play-circle"></i>  */}
          <span className='songTitle'>{p.name}</span>
          <hr />
        </div>
      ))}
      <Link to={`/playlist/${playlist.id}/addsong`}>
        <i className="fas fa-edit"></i>
      </Link>
    </div>

  );
}

export default PlaylistDetails;
