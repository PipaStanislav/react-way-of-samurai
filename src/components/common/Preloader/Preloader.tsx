import styles from './Preloader.module.css';
import { PreloaderStateType } from '../../../redux/preloader/preloader.types';

type PropsType = { preloader: PreloaderStateType }

const Preloader = (props: PropsType) => {
  return (
    <div className={ styles.parent }>
      <div className={ styles.block }>
        <img src={ props.preloader.src } alt={ props.preloader.title }/>
      </div>
    </div>
  );
}

export default Preloader;