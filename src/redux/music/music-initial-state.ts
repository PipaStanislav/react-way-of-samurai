import { MusicStateType } from './music.types';

const musicInitialState: MusicStateType = {
  offset: 0,
  limit: 10,
  count: 0,
  totalCount: 0,
  musics: [],
};

export default musicInitialState;