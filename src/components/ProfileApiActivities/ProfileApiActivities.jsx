
import ApiActivityCard from '../ApiActivityCard/ApiActivityCard'



const ProfileApiActivities = ( {profile} ) => {
  console.log('profile', profile)
  return (
    <div className='div'>
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