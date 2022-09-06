import preloaderImage from '../../../assets/images/Spinner-1s-200px.svg';

export default {
  newPostText: '',
  posts: [],
  profile: null,
  preloader: {
    isFetching: false,
    src: preloaderImage,
    alt: 'Spinner',
  },
};