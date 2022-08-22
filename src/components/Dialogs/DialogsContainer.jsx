import Dialogs from './Dialogs';
import StoreContext from '../../redux/StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const { messagesPage } = store.getState();

          return (
            <Dialogs dialogs={ messagesPage.dialogs }/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;