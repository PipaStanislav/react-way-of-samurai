import styles from './Users.module.css';
import UserContainer from './User/UserContainer';

const Users = (props) => {
  const { users, limit, showMore } = props;

  let usersElements = users.map((user) => {
    return (
      <UserContainer key={ user.id } user={ user }/>
    )
  })

  usersElements.length = limit;

  const onShowMore = () => {
    return showMore();
  }

  return (
    <div className={ styles.users }>
      <h2> Users </h2>

      <div className={ styles.items }>
        { usersElements }
      </div>

      <div className={ styles.showMore }>
        <button onClick={ onShowMore }>Show more</button>
      </div>
    </div>
  );
}


export default Users;