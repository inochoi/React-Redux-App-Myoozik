//Create new post
export const CREATE_LIST = 'CREATE_LIST';

//Fetch post
export const FETCH_LIST = 'FETCH_LIST';

//Delete post
export const DELETE_LIST = 'DELETE_LIST';
export const RESET_DELETED_LIST = 'RESET_DELETED_LIST';


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
    postId: id
  };
}


export function deletePlaylist(id) {
  return {
    type: DELETE_LIST,
    postId: id
  };
}
