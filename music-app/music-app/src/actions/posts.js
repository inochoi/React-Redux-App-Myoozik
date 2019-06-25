//Create new post
export const CREATE_POST = 'CREATE_POST';

//Fetch post
export const FETCH_POST = 'FETCH_POST';

//Delete post
export const DELETE_POST = 'DELETE_POST';
export const RESET_DELETED_POST = 'RESET_DELETED_POST';


export function createPost(request) {
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function resetDeletedPost() {
  return {
    type: RESET_DELETED_POST
  }
}
;

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    postId: id
  };
}


export function deletePost(id) {
  return {
    type: DELETE_POST,
    postId: id
  };
}
