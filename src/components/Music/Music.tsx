import styles from './Music.module.css';
import ReactAudioPlayer from 'react-audio-player';
import { MusicsType } from '../../redux/music/music.types';
import { FC } from 'react';

type PropsType = {
  musics: MusicsType
}

const Music: FC<PropsType> = (props): JSX.Element => {
  const songs = props.musics.map(music => {
    return (
      <div key={ music.id }>
        <h3>{ music.artist } - { music.song }</h3>
        <ReactAudioPlayer
          src={ music.src }
          controls
        />
      </div>
    );
  });

  return (
    <div className={ styles.musicWrapper }>
      { songs }
    </div>
  )
}

export default Music;