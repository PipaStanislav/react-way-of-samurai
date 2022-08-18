import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <div className={ styles.dialog + ' ' + styles.active }>
      <img src={ props.avatar.src } alt={ props.avatar.title }/>

      <NavLink to={ path }>{ props.name }</NavLink>
    </div>
  )
}
export default Dialog;