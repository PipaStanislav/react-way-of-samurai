import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  const { id, dialog } = props;
  const { avatar, name } = dialog;

  const path = '/dialogs/' + id;

  return (
    <div className={ styles.dialog + ' ' + styles.active }>
      <img src={ avatar.src } alt={ avatar.title }/>

      <NavLink to={ path }>{ name }</NavLink>
    </div>
  )
}
export default Dialog;