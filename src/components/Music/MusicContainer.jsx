import { compose } from 'redux';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import Music from './Music';
import { getMusics } from '../../redux/thunk-creators/thunk-creators';

const mapStateToProps = ({ musicPage }) => ({ musicPage });
const mapDispatchToProps = { getMusics };

const setMusicsInState = props => () => {
  if (!props?.musicPage?.musics.length) {
    props.getMusics({
      offset: props.musicPage.offset,
      limit: props.musicPage.limit
    });
  }
}


const MusicContainer = props => {
  useEffect(setMusicsInState(props))

  return (
    <Music musics={ props.musicPage.musics }/>
  )
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MusicContainer);