import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const { messagesPage } = props.store.getState();

  return (
    <Dialogs dialogs={ messagesPage.dialogs } store={ props.store }/>
  )
}

export default DialogsContainer;