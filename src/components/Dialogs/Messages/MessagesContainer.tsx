import React, { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Messages from './Messages';
import { getDialog, sendDialogMessage } from '../../../redux/thunk-creators/thunk-creators';
import withRouter, { RouterType } from '../../../hoc/withRouter';
import { StateType } from '../../../common/types';
import { DialogType } from '../../../redux/dialog/dialog.types';
import { UserIdType } from '../../../redux/user/user.types';
import { ParamsType, ThunkType } from '../../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  dialog: DialogType,
  authUserId: UserIdType,
}

type MapDispatchToPropsType = {
  sendDialogMessage: (params: ParamsType ) => ThunkType,
  getDialog: (params: ParamsType ) => ThunkType,
}

const mapStateToProps = ({ messagesPage, auth }: StateType): MapStateToPropsType => {
  return {
    dialog: messagesPage.dialog!,
    authUserId: auth.userId!,
  };
};

const mapDispatchToProps: MapDispatchToPropsType = { sendDialogMessage, getDialog }

class MessagesContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouterType> {
  componentDidUpdate = (prevProps: MapStateToPropsType & RouterType): void => {
    if (prevProps.router.params.id !== this.props.router.params.id) {
        this.props.getDialog({ id: this.props.router.params.id!, userId: this.props.authUserId! })
    }
  }

  render = (): JSX.Element => {
    return (
      <>{ this.props.dialog && <Messages { ...this.props }/> }</>
    );
  }
}

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer);