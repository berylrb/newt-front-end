import styles from './UserActivity.module.css'

const UserActivity = (props) => {
  console.log(props)
  return (

    <div className={styles.userActivityDiv}>
        <h4>Activity:</h4>
        <p>{props.activity.activity}</p>
        <h4>Type:</h4>
        <p>{props.activity.type}</p>
        <h4>Price:</h4>
        <p>${props.activity.price}</p>
        <h4>Participants:</h4>
        <p>{props.activity.participants}</p>
        <button className={styles.button6} onClick={() => props.handleDeleteUserActivity(props.activity._id)}>Delete</button>
    </div>
  )
}

export default UserActivity