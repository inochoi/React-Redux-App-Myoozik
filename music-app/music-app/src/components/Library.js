import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSongs } from '../actions/playlists';

const Library = (props) => {

    const initialState = {
        playingUrl: '',
        audio: null,
        playing: false        
    }
    
    const [music, setMusic] = useState(initialState);    

    useEffect (() => {
        props.getSongs();
        console.log(props);
    }, []);

    const playMusic = (previewUrl) => {
        console.log('play');
        let audio = new Audio(previewUrl);
        let newMusic = {};
        if (!music.playing){
            audio.play();
            
            newMusic.playing = true;
            newMusic.playingUrl = previewUrl;
            newMusic.audio = audio;
        }
        else if (music.playingUrl === previewUrl){
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
        
    }

    return props.isLoading ?
        <h2>Loading...</h2> :
        ( 
        <div> 
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Cover</th>
                        <th>Play</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songList !== undefined && 
                    props.songList.map((song, index) => (
                        <tr key={index}>
                            <td>{song.name}</td>
                            <td>{song.albumName}</td>
                            <td>{song.artistName}</td>
                            <td><img src= {`${song.imagesrc}`} alt='undefined' /></td>
                            <td><i className="fas fa-play-circle" onClick={() => playMusic(song.previewURL)}></i></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table> 
        </div>
     );
}
 
const mapStateToProps = state => ({
    songList: state.music.data,
    isLoading: state.isLoading
    }
)

const mapDispatchToProps = dispatch => ({
    getSongs: () => dispatch(getSongs())
})


export default connect(mapStateToProps, mapDispatchToProps)(Library);