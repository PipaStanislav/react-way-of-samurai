import styles from './FriendsBar.module.css';
import { NavLink } from 'react-router-dom';

const FriendsBar = (props) => {
  const friendsElements = props.state.friends.map(({ id, firstName, avatar }) => {
    return (
      <div key={ id } className={ styles.item }>
        <img src={ avatar.large.src } alt={ avatar.large.title }/>

        <div className={styles.navLink}>
          <NavLink to={ `/profile/${ id }` }>  { firstName } </NavLink>
        </div>
      </div>
    )
  })

  return (
    <div className={ styles.friendsBar }>
      <h1>{ props.state.title }</h1>

      <div>
        { friendsElements }
      </div>
    </div>
  )
}

export default FriendsBar;