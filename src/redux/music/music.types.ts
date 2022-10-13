import { CountType, LimitType, OffsetType, TotalCountType } from '../../common/types';

export type MusicType = {
  id: number,
  artist: string,
  song: string,
  src: string,
};

export type MusicsType = Array<MusicType>

export type MusicStateType = {
  offset: OffsetType,
  limit: LimitType,
  count: CountType,
  totalCount: TotalCountType,
  musics: MusicsType,
};
