import React, { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getDialogs } from '../../redux/thunk-creators/thunk-creators';
import withRouter, { RouterType } from '../../hoc/withRouter';
import withReactLazy from '../../hoc/withReactLazy';
import { StateType } from '../../common/types';
import { DialogsType } from '../../redux/dialog/dialog.types';
import { AuthUserIdType } from '../../redux/auth/auth.types';
import { ParamsType, ThunkType } from '../../redux/thunk-creators/thunk-creators.types';

type MapStateToPropsType = {
  dialogs: DialogsType,
  authUserId: AuthUserIdType,
}

type MapDispatchToPropsType = {
  getDialogs: (params: ParamsType ) => ThunkType,
}

const Dialogs = React.lazy(() => import('./Dialogs'));

const mapStateToProps = ({ messagesPage, auth }: StateType): MapStateToPropsType => {
  return {
    dialogs: messagesPage.dialogs,
    authUserId: auth.userId,
  };
};

const mapDispatchToProps: MapDispatchToPropsType = { getDialogs };

class DialogsContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType & RouterType > {
  componentDidMount = (): void => {
    this.props.getDialogs({ userId: this.props.authUserId! });
  }

  render = (): JSX.Element => {
    return (
      <Dialogs { ...this.props } />
    )
  }
}


export default compose<ComponentType>(
  withRouter,
  withAuthRedirect,
  withReactLazy,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer);