import styles from './Preloader.module.css';
import { PreloaderStateType } from '../../../redux/preloader/preloader.types';
import { FC } from 'react';

type PropsType = { preloader: PreloaderStateType }

const Preloader: FC<PropsType> = props => {
  return (
    <div className={ styles.parent }>
      <div className={ styles.block }>
        <img src={ props.preloader.src } alt={ props.preloader.title }/>
      </div>
    </div>
  );
}

export default Preloader;