import {
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST, RESET_DELETED_LIST
} from '../actions/playlists';


// const INITIAL_STATE = {
//   postsList: {
//     posts: [
//       {
//         _id: '00',
//         title: 'My First Post',
//         categories: 'Programming, Redux',
//         content: 'My first post'
//       }
//     ]
//   },
//   activePlaylist: { playlist: null },
//   deletedPlaylist: { playlist: null }
// };

const INITIAL_STATE = {
  songs: [
      {
          id: "0",
          title: "My YC app: Dropbox - Throw away your USB drive"
      },

      {
          id: "1",
          title: "Ask HN: The Arc Effect"
      },
      {
          id: "2",
          title: "Justin.tv is looking for a Lead Flash Engineer!"
      },

      {
          id: "3",
          title: "Yes, ban them; Im tired of seeing Valleywag stories on News.YC."
      }
  ],
  playlists: [
      {
          id: '0',
          name: 'my music',
          songs: [
              {
                  id: "0",
                  title: "My YC app: Dropbox - Throw away your USB drive"

              },
              {
                  id: "3",
                  title: "Yes, ban them; Im tired of seeing Valleywag stories on News.YC."
              }
          ]
      },
      {
          id: '1',
          name: 'other music',
          songs: [
              {
                  id: "1",
                  title: "Ask HN: The Arc Effect"

              },
              {
                  id: "2",
                  title: "Justin.tv is looking for a Lead Flash Engineer!"
                      }
          ]
      }
  ],
  activePlaylist: [{ playlist: null }],
  deletedPlaylist: [{ playlist: null }]
};

export default function (state = INITIAL_STATE, action) {
  let index;

  switch (action.type) {

    case FETCH_LIST:
      index = state.postsList.posts.findIndex(p => p._id === action.postId);
      console.log(state.postsList.posts[index])
      return {
        ...state,
        activePost: {
          ...state.activePost,
          post: state.postsList.posts[index]
        }
      };

    case CREATE_LIST:
      return {
        ...state,
        postsList: {
          ...state.postsList,
          posts: [...state.postsList.posts, action.payload]
        }
      }

    case DELETE_LIST:
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

    case RESET_DELETED_LIST:
      return { ...state, deletedPost: { post: null } }

    default:
      return state;
  }
}
