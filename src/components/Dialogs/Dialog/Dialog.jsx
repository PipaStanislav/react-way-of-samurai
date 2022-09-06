import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  const { id, dialog } = props;
  const { avatar, fullName } = dialog.user;

  const path = '/dialogs/' + id;

  return (
    <div className={ styles.dialog + ' ' + styles.active }>
      <img src={ avatar.large.src } alt={ avatar.large.title }/>

      <div className={styles.navLink}>
          <NavLink to={ path }>{ fullName }</NavLink>
      </div>
    </div>
  )
}
export default Dialog;