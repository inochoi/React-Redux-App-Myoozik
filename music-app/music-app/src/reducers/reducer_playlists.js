import {
  FETCH_LIST,
  CREATE_LIST,
  DELETE_LIST, RESET_DELETED_LIST
} from '../actions/playlists';

const INITIAL_STATE = {
  songs: [
    {
      id: "0",
      title: "bad guy",
      artist: 'Billie Eilish'
    },

    {
      id: "1",
      title: "Earfquake",
      artist: 'Tyler, the Creator'
    },
    {
      id: "2",
      title: "Never Really Over",
      artist: 'Katy Perry'
    },

    {
      id: "3",
      title: "Old Town Road - Remix",
      artist: 'Lil Nas X'
    }
  ],
  playlists: [
    {
      id: '0',
      name: 'my music',
      description: 'my first playlist',
      songs: [
        {
          id: "0",
          title: "bad guy",
          artist: 'Billie Eilish'
        },
        {
          id: "3",
          title: "Old Town Road - Remix",
          artist: 'Lil Nas X'
        }
      ]
    },
    {
      id: '1',
      name: 'other music',
      description: 'my other playlist',
      songs: [
        {
          id: "1",
          title: "Earfquake",
          artist: 'Tyler, the Creator'
        },
        {
          id: "2",
          title: "Never Really Over",
          artist: 'Katy Perry'
        }
      ]
    }
  ],
  activePlaylist: { playlist: null },
  deletedPlaylist: { playlist: null }
};

export default function (state = INITIAL_STATE, action) {
  let index;
  console.log(state);

  switch (action.type) {

    case FETCH_LIST:
      index = state.playlists.findIndex(p => p.id === action.playlistId);
      console.log(state.playlists[index])
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

      }

    case DELETE_LIST:
      index = state.playlists.findIndex(p => p.id === action.playlistId);
      let copyPlaylist = state.playlists.slice();
      let deleted = copyPlaylist.splice(index, 1);

      return {
        ...state,
        playlists:
          copyPlaylist
        ,
        deletedPlaylist: {
          ...state.deletedPlaylist,
          playlist: deleted
        }
      };

    case RESET_DELETED_LIST:
      return { ...state, deletedPlaylist: { playlist: null } }

    default:
      return state;
  }
}
