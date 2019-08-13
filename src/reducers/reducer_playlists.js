import {
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST,
  RESET_DELETED_LIST,
  UPDATE_LIST,
  LOADED_SONGS,
  LOADING_SONGS
} from "../actions/playlists";

const INITIAL_STATE = {
  songs: [
    {
      id: "tra.366594336",
      name: "Old Town Road (feat. Billy Ray Cyrus) (Remix)",
      artistName: "Lil Nas X",
      albumId: "alb.366594335",
      previewURL: "https://listen.hs.llnwd.net/g3/5/3/4/3/5/1498053435.mp3"
    },
    {
      id: "tra.361046974",
      name: "Old Town Road",
      artistName: "Lil Nas X",
      albumId: "alb.361046973",
      previewURL: "https://listen.hs.llnwd.net/g3/1/8/2/6/0/1498106281.mp3"
    },
    {
      id: "tra.186048822",
      name: "Tennessee Whiskey",
      artistName: "Chris Stapleton",
      albumId: "alb.186048819",
      previewURL: "https://listen.hs.llnwd.net/g3/8/9/6/1/4/1281841698.mp3"
    },

    {
      id: "tra.342529472",
      name: "Wow.",
      artistName: "Post Malone",
      albumId: "alb.342529471",
      previewURL: "https://listen.hs.llnwd.net/g3/8/5/1/2/5/1467052158.mp3"
    }
  ],
  playlists: [
    {
      id: "0",
      name: "my music",
      description: "my first playlist",
      songs: [
        {
          id: "tra.366594336",
          name: "Old Town Road (feat. Billy Ray Cyrus) (Remix)",
          artistName: "Lil Nas X",
          albumId: "alb.366594335",
          previewURL: "https://listen.hs.llnwd.net/g3/5/3/4/3/5/1498053435.mp3"
        },
        {
          id: "tra.342529472",
          name: "Wow.",
          artistName: "Post Malone",
          albumId: "alb.342529471",
          previewURL: "https://listen.hs.llnwd.net/g3/8/5/1/2/5/1467052158.mp3"
        }
      ]
    },
    {
      id: "1",
      name: "other music",
      description: "my other playlist",
      songs: [
        {
          id: "tra.361046974",
          name: "Old Town Road",
          artistName: "Lil Nas X",
          albumId: "alb.361046973",
          previewURL: "https://listen.hs.llnwd.net/g3/1/8/2/6/0/1498106281.mp3"
        },
        {
          id: "tra.186048822",
          name: "Tennessee Whiskey",
          artistName: "Chris Stapleton",
          albumId: "alb.186048819",
          previewURL: "https://listen.hs.llnwd.net/g3/8/9/6/1/4/1281841698.mp3"
        }
      ]
    }
  ],
  activePlaylist: { playlist: null },
  deletedPlaylist: { playlist: null },
  isLoading: false,
  data: []
};

export default function (state = INITIAL_STATE, action) {
  let index;

  switch (action.type) {
    case LOADING_SONGS:
      return { ...state, isLoading: true };

    case LOADED_SONGS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.tracks
      };

    case FETCH_LIST:
      index = state.playlists.findIndex(p => p.id === action.playlistId);
      return {
        ...state,
        activePlaylist: {
          ...state.activePlaylist,
          playlist: state.playlists[index]
        }
      };

    case CREATE_LIST:
      return {
        ...state,

        // ...state.playlists,
        playlists: [...state.playlists, action.payload]
      };

    case DELETE_LIST:
      index = state.playlists.findIndex(p => p.id === action.playlistId);
      let copyPlaylist = state.playlists.slice();
      let deleted = copyPlaylist.splice(index, 1);

      return {
        ...state,
        playlists: copyPlaylist,
        deletedPlaylist: {
          ...state.deletedPlaylist,
          playlist: deleted
        }
      };

    case UPDATE_LIST:
      index = state.playlists.findIndex(p => p.id === action.playlistId);
      let updatedPlaylist = state.playlists;
      updatedPlaylist.splice(index, 1, action.payload);

      return {
        ...state,
        playlists: updatedPlaylist
      };

    case RESET_DELETED_LIST:
      return { ...state, deletedPlaylist: { playlist: null } };

    default:
      return state;
  }
}
