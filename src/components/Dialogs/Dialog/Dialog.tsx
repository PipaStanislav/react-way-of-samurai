import { NavLink } from 'react-router-dom';

import styles from './Dialog.module.css';
import { IdType } from '../../../common/types';
import { DialogType } from '../../../redux/dialog/dialog.types';

type PropsType = {
  id: IdType,
  dialog: DialogType,
}

const Dialog = ({ id, dialog }: PropsType) => {
  const path = '/dialogs/' + id;

  return (
    <div className={ styles.dialog + ' ' + styles.active }>
      <img src={ dialog?.user.avatar.large.src } alt={ dialog?.user.avatar.large.title }/>

      <div className={styles.navLink}>
          <NavLink to={ path }>{ dialog?.user.fullName }</NavLink>
      </div>
    </div>
  )
}
export default Dialog;