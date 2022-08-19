import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
  const { dialogs, store } = props;

  const dialogElements = dialogs.map(({ id, ...dialog }) => {
      return (
        <Dialog id={ id } key={ id } dialog={ dialog }/>
      )
    }
  );

  return (
    <div className={ styles.dialogs }>
      <div className={ styles.dialogsNavBar }>
        { dialogElements }
      </div>

      <MessagesContainer store={ store }/>
    </div>
  )
}

export default Dialogs;