import styles from './UserActivity.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { show } from "../../services/profileService"
import { useParams } from 'react-router-dom'

const UserActivity = (props, {user}) => {
  const [profile, setProfile] = useState()
  const {id} = useParams()
  console.log(props)



  useEffect(() => {
    const fetchProfile = async() => {
      const profileData = await show(id)
      setProfile(profileData)
      // set activities based on profiledata.activities
    }
    fetchProfile()
  }, [id])


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
        {user?.profile === profile?._id ?
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