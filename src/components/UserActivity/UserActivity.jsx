import styles from './UserActivity.module.css'
import { Link } from 'react-router-dom'

const UserActivity = (props) => {
  return (
    <>
      <div className={styles.userActivityDiv}>
      <table className={styles.table}>
            <tr>
              <th className={styles.th}>ACTIVITY</th>
              <th className={styles.th}>TYPE</th>
              <th className={styles.th}>PRICE</th>
            </tr>
            <tr>
              <td className={styles.td}>{props.activity.activity}</td>
              <td className={styles.td}>{props.activity.type}</td>
              <td className={styles.td}>${props.activity.price}</td>
            </tr>
          </table>
        {props.user?.profile === props.profile?._id ?
        <>
          <div className={styles.buttonHolder}>
            <button className={styles.button6} onClick={() => props.handleDeleteUserActivity(props.activity._id)}>Delete</button>
            <button className={styles.button6Edit}>
              <Link
                to="/edit"
                state={props.activity}
                className={styles.editLink}
              > 
                Edit
              </Link>
            </button>
          </div>
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