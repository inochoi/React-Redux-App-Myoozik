import { LOADED_SONGS, LOADING_SONGS} from '../constants';

const INITIAL_STATE = {
    data: [],
    isLoading: false
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_SONGS:
            return {isLoading: true};
        case LOADED_SONGS: 
            console.log(action.payload.tracks)
            return { isLoading: false, data: action.payload.tracks };
        default:
            return state;
    }
}

export default rootReducer;
