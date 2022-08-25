import React from 'react';

import styles from './Users.module.css';
import UserContainer from './User/UserContainer';
import userApiService from '../../api/user-api/user-api-service';

class Users extends React.Component {
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    const offset = this.props.users.length;
    const limit = offset + this.props.limit;

    userApiService.getUsers({ offset, limit }).then(response => {
      this.props.getUsers(response);
    })
  }

  onShowMore = () => {
    return this.getUsers();
  }

  generateUserElements = () => {
    return this.props.users.map((user) => {
      return (
        <UserContainer key={ user.id } user={ user }/>
      )
    })
  }

  render = () => {
    const usersElements = this.generateUserElements();

    return (
      <div className={ styles.users }>
        <h2> Users </h2>

        <div className={ styles.items }>
          { usersElements }
        </div>

        <div className={ styles.showMore }>
          <button onClick={ this.onShowMore }>Show more</button>
        </div>
      </div>
    );
  }

}

export default Users;