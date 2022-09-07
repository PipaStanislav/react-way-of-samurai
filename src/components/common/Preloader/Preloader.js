import styles from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <div className={ styles.parent }>
      <div className={ styles.block }>
        <img src={ props.preloader.src } alt={ props.preloader.alt }/>
      </div>
    </div>
  );
}

export default Preloader;