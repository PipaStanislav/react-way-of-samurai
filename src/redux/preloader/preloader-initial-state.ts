import preloaderImage from '../../assets/images/Spinner-1s-200px.svg';
import { PreloaderStateType } from './preloader.types';

const preloaderInitialState: PreloaderStateType = {
  isFetching: false,
  src: preloaderImage,
  title: 'Spinner',
};

export default preloaderInitialState;