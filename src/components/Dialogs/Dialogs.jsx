import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  const dialogElements = props.state.dialogs.map(({ id, name, avatar }) => {
      return (
        <Dialog id={ id } key={ id } name={ name } avatar={ avatar }/>
      )
    }
  );

  return (
    <div className={ styles.dialogs }>
      <div className={ styles.dialogsNavBar }>
        { dialogElements }
      </div>

      <Messages state={ props.state.messages }
                newMessageText={ props.state.newMessageText }
                dispatch={ props.dispatch }/>
    </div>
  )
}

export default Dialogs;