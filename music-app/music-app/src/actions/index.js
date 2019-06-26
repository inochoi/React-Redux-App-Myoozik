import { LOADED_SONGS, LOADING_SONGS } from '../constants';
import axios from 'axios';

export const getSongs = () => dispatch => {
    console.log('getSongs');
    dispatch({ type: LOADING_SONGS });
    //axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=c1cde2d78679e225704cc430575e14ae&format=json')
    axios.get('http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4')
    .then(res => {
        let albumId = '';
        let artist = '';
        console.log(res);
        console.log(res.data.tracks.length);
        let promises = [];
        for (let i = 0; i < res.data.tracks.length; i++){
            albumId = res.data.tracks[i].albumId;
            //artist = res.data.tracks[i].artistName;
            console.log(albumId);
            res.data.tracks[i].imagesrc = `https://api.napster.com/imageserver/v2/albums/${albumId}/images/70x70.jpg`;
            //promises.push(axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=c1cde2d78679e225704cc430575e14ae&artist=${artist}&track=${name}&format=json`));    
        }
        // axios.all(promises)
        // .then(innerRes => {
        //     console.log(innerRes);

        //     for (let i = 0; i < res.data.tracks.length; i++){  
        //         try {
        //             res.data.tracks[i].imagesrc = innerRes[i].data.track.album.image[0]['#text'];
        //         }
        //         catch (e)
        //         {
        //             res.data.tracks.track[i].imagesrc = '';
        //             console.log('image is missing: ' + i.toString());
        //         }
        //     }
            console.log(res.data);
            dispatch(sendData(res.data))              
    })
}

export const sendData = data => ({ type: LOADED_SONGS, payload: data })