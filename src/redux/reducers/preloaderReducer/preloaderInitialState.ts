// @ts-ignore
import preloaderImage from '../../../assets/images/Spinner-1s-200px.svg';
import { PreloaderStateType } from './preloaderReducer.types';

const preloaderInitialState: PreloaderStateType = {
  isFetching: false,
  src: preloaderImage,
  alt: 'Spinner',
};

export default preloaderInitialState;