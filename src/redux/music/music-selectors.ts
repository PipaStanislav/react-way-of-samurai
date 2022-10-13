import { CountType, LimitType, OffsetType, StateType, TotalCountType } from '../../common/types';
import { MusicStateType, MusicsType } from './music.types';

export const getOffset = (state: StateType): OffsetType => state.musicPage.offset;

export const getLimit = (state: StateType): LimitType => state.musicPage.limit;

export const getCount = (state: StateType): CountType => state.musicPage.count;

export const getTotalCount = (state: StateType): TotalCountType => state.musicPage.totalCount;

export const getMusics = (state: StateType): MusicsType => state.musicPage.musics;

export const getDialogStateToProps = (state: StateType): MusicStateType => ({
  offset: getOffset(state),
  limit: getLimit(state),
  count: getCount(state),
  totalCount: getTotalCount(state),
  musics: getMusics(state),
});

const getStateToProps = (state: StateType): { musicPage: MusicStateType } => ({
  musicPage: getDialogStateToProps(state),
});

export default getStateToProps;