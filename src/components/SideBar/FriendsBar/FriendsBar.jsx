import styles from './FriendsBar.module.css';

const FriendsBar = (props) => {
  const friendsElements = props.state.friends.map(({ id, name, avatar }) => {
    return (
      <div key={id} className={ styles.item }>
        <img src={ avatar.src } alt={ avatar.title }/>

        <div>{ name }</div>
      </div>
    )
  })

  return (
    <div className={ styles.friendsBar }>
      <h1>{ props.state.title }</h1>

      <div >
        { friendsElements }
      </div>
    </div>
  )
}

export default FriendsBar;