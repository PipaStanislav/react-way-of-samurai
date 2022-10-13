import DISPATCH_CONSTANTS from '../../constants/dispatch/dispatch-constants'
import initialStore from './music-initial-state';
import { MusicStateType, MusicsType, MusicType } from './music.types';
import { MetaDataType } from '../../common/types';
import { MusicActionInterface } from './music.interfaces';

const setUsers = (state: MusicStateType, musics: MusicsType): MusicStateType => ({ ...state, musics: [...musics] });

const setMetaData = (state: MusicStateType, metaData: MetaDataType): MusicStateType => ({ ...state, ...metaData });

const userReducer = (state: MusicStateType = initialStore, action: MusicActionInterface) => {
  if (action.type === DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS) {
    return setUsers(state, <Array<MusicType>>action.musics);
  }

  if (action.type === DISPATCH_CONSTANTS.MUSIC_PAGE.SET_MUSICS_META_DATA) {
    return setMetaData(state, <MetaDataType>action.metaData);
  }

  return state;
}

export default userReducer;