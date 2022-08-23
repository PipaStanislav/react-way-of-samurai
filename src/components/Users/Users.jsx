import React from 'react';

import styles from './Users.module.css';
import UserContainer from './User/UserContainer';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.props.getUsers();
  }

  onShowMore = () => {
    return this.props.getUsers();
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