import styles from './ProfileAppActivities.module.css'
import ApiActivityCard from '../ApiActivityCard/ApiActivityCard'
import { Link } from 'react-router-dom'



const ProfileApiActivities = ( {profile, user, addToDoneActivities} ) => {
  console.log('profile', profile)
  return (
    <div className={styles.profileCardDiv}>
      {profile?.activities?.map(activity =>
      <Link className={styles.activityLink}
        to="/activity"
        state={{soloActivity: activity}}
        >
        <ApiActivityCard
          key={activity._id}
          activity={activity}
          addToDoneActivities={addToDoneActivities}
        />
        </Link>
      )}
      {profile?.doneActivities?.map((activity, idx) =>
        <ApiActivityCard
        key={activity._id} 
        activity={activity}
        user={user}
        profile={profile}
        addToDoneActivities={addToDoneActivities}
        idx={idx}
        />
      )}
    </div>
  )
}

export default ProfileApiActivities