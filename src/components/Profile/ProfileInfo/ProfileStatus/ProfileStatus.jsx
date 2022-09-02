import React from 'react';

import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editeMode: false,
    };
  }

  changeStatusEditMode = () => {
    this.setState({ editeMode: !this.state.editeMode })
  }

  onChangeProfileStatus = (event) => {
    this.props.updateProfile({ id: this.props.userId, status: event.currentTarget.value })
  }

  render() {
    return (
      <div className={ styles.status }>
        <span>Status:</span>
        {
          this.state.editeMode
            ?
            <div className={ styles.statusElement }>
              <input autoFocus={ true } onBlur={ this.changeStatusEditMode } onChange={ this.onChangeProfileStatus }
                     value={ this.props.status }/>
            </div>
            :
            <div className={ styles.statusElement }>
              <span onDoubleClick={ this.changeStatusEditMode }>{ this.props.status }</span>
            </div>
        }
      </div>
    );
  }
}


export default ProfileStatus;