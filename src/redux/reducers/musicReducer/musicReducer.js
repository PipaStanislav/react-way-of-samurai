import DISPATCH_CONSTANTS from '../../../constants/dispatch-constants'
import initialStore from './musicInitialStore';

const setUsers = (state, musics) => ({ ...state, musics: [...musics] });

const setMetaData = (state, metaData) => ({ ...state, ...metaData });

const userReducer = (state = initialStore, action) => {
  if (action.type === DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS) {
    return setUsers(state, action.musics);
  }

  if (action.type === DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS_META_DATA) {
    return setMetaData(state, action.metaData);
  }

  return state;
}

export default userReducer;