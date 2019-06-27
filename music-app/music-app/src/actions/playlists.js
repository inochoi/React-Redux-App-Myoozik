import axios from 'axios';

//Create new post
export const CREATE_LIST = 'CREATE_LIST';

//Fetch post
export const FETCH_LIST = 'FETCH_LIST';

//Delete post
export const DELETE_LIST = 'DELETE_LIST';
export const RESET_DELETED_LIST = 'RESET_DELETED_LIST';

export const LOADED_SONGS = 'LOADED_SONGS';
export const LOADING_SONGS = 'LOADING_SONGS';
export const UPDATE_LIST = 'UPDATE_LIST';



export function createPlaylist(request) {
  return {
    type: CREATE_LIST,
    payload: request
  };
}

export function resetDeletedPlaylist() {
  return {
    type: RESET_DELETED_LIST
  }
}
;

export function fetchPlaylist(id) {
  return {
    type: FETCH_LIST,
    playlistId: id
  };
}


export function deletePlaylist(id) {
  return {
    type: DELETE_LIST,
    playlistId: id
  };
}

export function updatePlaylist(playlist) {
  return {
    type: UPDATE_LIST,
    payload: playlist,
    playlistId: playlist.id
  }
}


export const getSongs = () => dispatch => {
  console.log('getSongs');
  dispatch({ type: LOADING_SONGS });
  axios.get('http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4')
  .then(res => {
      let albumId = '';
      let artist = '';
      console.log(res);
      console.log(res.data.tracks.length);
      let promises = [];
      for (let i = 0; i < res.data.tracks.length; i++){
          albumId = res.data.tracks[i].albumId;
          console.log(albumId);
          res.data.tracks[i].imagesrc = `https://api.napster.com/imageserver/v2/albums/${albumId}/images/70x70.jpg`;
      }
          console.log(res.data);
          dispatch(sendData(res.data))              
  })
}

export const sendData = data => ({ type: LOADED_SONGS, payload: data })