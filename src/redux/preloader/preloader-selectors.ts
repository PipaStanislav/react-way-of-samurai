import { StateType } from '../../common/types';
import { IsFetchingType, PreloaderStateType, SrcType, TitleType } from './preloader.types';

export const getIsFetching = (state: StateType): IsFetchingType => state.preloader.isFetching;

export const getSrc = (state: StateType): SrcType => state.preloader.src;

export const getTitle = (state: StateType): TitleType => state.preloader.title;

export const getPreloaderStateToProps = (state: StateType): PreloaderStateType => ({
  src: getSrc(state),
  title: getTitle(state),
  isFetching: getIsFetching(state),
});

const getStateToProps = (state: StateType): { preloader: PreloaderStateType } => ({
  preloader: getPreloaderStateToProps(state),
});

export default getStateToProps;