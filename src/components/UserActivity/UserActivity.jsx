import styles from './UserActivity.module.css'
import { Link } from 'react-router-dom'

const UserActivity = (props) => {
  return (
    <>
      <div className={styles.userActivityDiv}>
        <h4>Activity:</h4>
        <p>{props.activity.activity}</p>
        <h4>Type:</h4>
        <p>{props.activity.type}</p>
        <h4>Price:</h4>
        <p>${props.activity.price}</p>
        <h4>Participants:</h4>
        <p>{props.activity.participants}</p>
        {props.user?.profile === props.profile?._id ?
        <>
          <button className={styles.button6} onClick={() => props.handleDeleteUserActivity(props.activity._id)}>Delete</button>
          <button>
          <Link
            to="/edit"
            state={props.activity}
          > 
            Edit
          </Link>
          </button>
        </>
        :
        <>
          <p> </p>
        </>
        }
      </div>
    </>
  )
}

export default UserActivity