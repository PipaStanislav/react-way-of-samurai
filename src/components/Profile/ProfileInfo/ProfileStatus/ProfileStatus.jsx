import React from 'react';

import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editeMode: false,
      status: this.props.status,
      editable: false,
    };
  }
  componentDidMount = () => {
    if (this.props.auth.userId === this.props.profileUserId) {
      return this.setState({ editable: true });
    }
    return this.setState({ editable: false });
  }


  changeStatusEditMode = () => {
    this.setState({ editeMode: !this.state.editeMode });

    if (this.state.editeMode) {
      return this.props.updateProfile({ id: this.props.auth.userId, status: this.state.status });
    }
  }

  onChangeProfileStatus = (event) => {
    return this.setState({ status: event.currentTarget.value });
  }

  render() {
    return (
      <div className={ styles.status }>
        <span>Status:</span>
        {
          this.state.editeMode && this.state.editable
            ?
            <div className={ styles.statusElement }>
              <input autoFocus={ true } onBlur={ this.changeStatusEditMode } onChange={ this.onChangeProfileStatus }
                     value={ this.state.status }/>
            </div>
            :
            <div className={ styles.statusElement }>
              <span onDoubleClick={ this.changeStatusEditMode }>{ this.props.status || '---' }</span>
            </div>
        }
      </div>
    );
  }
}


export default ProfileStatus;