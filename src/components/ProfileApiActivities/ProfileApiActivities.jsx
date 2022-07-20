import styles from './ProfileAppActivities.module.css'
import ApiActivityCard from '../ApiActivityCard/ApiActivityCard'



const ProfileApiActivities = ( {profile, user, addToDoneActivities} ) => {
  console.log('profile', profile)
  return (
    <div className={styles.profileCardDiv}>
      {profile?.activities?.map(activity =>
        <ApiActivityCard
          key={activity._id}
          activity={activity}
        />
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