import { FC } from 'react';

import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessagesContainer from './Messages/MessagesContainer';
import { DialogsType } from '../../redux/dialog/dialog.types';

type Props = {
  dialogs: DialogsType,
}

const Dialogs: FC<Props> = (props): JSX.Element => {
  const { dialogs } = props;

  const dialogElements = dialogs.map(({ id, ...dialog }) => {
      return (
        <Dialog id={ id } key={ id } dialog={ { id, ...dialog } }/>
      )
    }
  );

  return (
    <div className={ styles.dialogs }>
      <div className={ styles.dialogsNavBar }>
        { dialogElements }
      </div>

      <MessagesContainer/>
    </div>
  )
}

export default Dialogs;