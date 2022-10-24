import { compose } from 'redux';
import { connect } from 'react-redux';
import { FC, useEffect } from 'react';

import Music from './Music';
import { getMusics } from '../../redux/thunk-creators/thunk-creators';
import { StateType } from '../../common/types';
import { MusicStateType } from '../../redux/music/music.types';
import { ParamsType } from '../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  musicPage: MusicStateType
}

type MapDispatchToPropsType = {
  getMusics: (params: ParamsType) => void
}

const mapStateToProps = ({ musicPage }: StateType): MapStateToPropsType => ({ musicPage });
const mapDispatchToProps: MapDispatchToPropsType = { getMusics };

const setMusicsInState = (props: MapStateToPropsType & MapDispatchToPropsType) => () => {
  if (!props?.musicPage?.musics.length) {
    props.getMusics({
      offset: props.musicPage.offset,
      limit: props.musicPage.limit
    });
  }
}


const MusicContainer: FC<MapStateToPropsType & MapDispatchToPropsType> = (props): JSX.Element => {
  useEffect(setMusicsInState(props))

  return (
    <Music musics={ props.musicPage.musics }/>
  )
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MusicContainer);