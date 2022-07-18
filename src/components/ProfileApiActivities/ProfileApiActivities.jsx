import { useState, useEffect } from 'react'
import ApiActivityCard from '../ApiActivityCard/ApiActivityCard'
import styles from './ProfileApiActivities.module.css'


const ProfileApiActivities = ({ profile }) => {
  const [profileApiActivities, setProfileApiActivities] = useState([])

  useEffect(() => {
    if (profile) setProfileApiActivities(profile.activities)
  }, [profile])

  return (
    <div className={styles.apiActivityDiv}>
      {profile?.activities?.map(activity =>
        <ApiActivityCard
          key={activity._id}
          activity={activity}
        />
      )}
    </div>
  )
  
}

export default ProfileApiActivities