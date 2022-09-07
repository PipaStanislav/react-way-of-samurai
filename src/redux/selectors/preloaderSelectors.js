export const getIsFetching = state => {
  return state.preloader.isFetching;
};

export const getSrc = state => {
  return state.preloader.src;
};

export const getAlt = state => {
  return state.preloader.alt;
};


export const getPreloaderStateToProps = state => {
  return {
    src: getSrc(state),
    alt: getAlt(state),
    isFetching: getIsFetching(state),
  }
};

const getStateToProps = state => {
  return {
    preloader: getPreloaderStateToProps(state),
  };
};

export default getStateToProps;