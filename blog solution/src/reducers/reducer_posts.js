import {
  FETCH_POST,
  CREATE_POST,
  DELETE_POST, RESET_DELETED_POST
} from '../actions/posts';


const INITIAL_STATE = {
  postsList: {
    posts: [
      {
        _id: '00',
        title: 'My First Post',
        categories: 'Programming, Redux',
        content: 'My first post'
      }
    ]
  },
  newPost: { post: null },
  activePost: { post: null },
  deletedPost: { post: null },
};

export default function (state = INITIAL_STATE, action) {
  let index;

  switch (action.type) {

    case FETCH_POST:
      index = state.postsList.posts.findIndex(p => p._id === action.postId);
      console.log(state.postsList.posts[index])
      return {
        ...state,
        activePost: {
          ...state.activePost,
          post: state.postsList.posts[index]
        }
      };

    case CREATE_POST:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          posts: [...state.postsList.posts, action.payload]
        },
        newPost: {
          ...state.newPost,
          post: action.payload
        }
      }

    case DELETE_POST:
      index = state.postsList.posts.findIndex(p => p._id === action.postId);
      let copyPosts = state.postsList.posts.slice();
      let deleted = copyPosts.splice(index, 1)[0];

      return {
        ...state,
        postsList: {
          ...state.postsList,
          posts: copyPosts
        },
        deletedPost: {
          ...state.deletedPost,
          post: deleted
        }
      };

    case RESET_DELETED_POST:
      return { ...state, deletedPost: { post: null } }

    default:
      return state;
  }
}
