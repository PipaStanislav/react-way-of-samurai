import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <div className={ style.dialog + ' ' + style.active }>
      <NavLink to={ path }>{ props.name }</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={ style.message }>{ props.message }</div>
  )
}

const Dialogs = (props) => {
  const dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Tome' },
    { id: 3, name: 'Jone' },
  ];

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'Hello' }
  ];

  const dialogElements = dialogs.map(({ id, name }) => <DialogItem id={ id } name={ name }/>)

  const messagesElements = messages.map(({ id, message }) => <Message id={ id } message={ message }/>)

  return (
    <div className={ style.dialogs }>
      <div className={ style.dialogsItems }>
        { dialogElements }
      </div>

      <div className={ style.messages }>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;