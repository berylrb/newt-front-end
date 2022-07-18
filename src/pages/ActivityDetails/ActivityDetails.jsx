import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getActivityDetails } from '../../services/bored-api'
import { useLocation } from 'react-router-dom'
import  styles from './ActivityDetails.module.css'
import * as profileService from '../../services/profileService'

const ActivityDetails = ( {user} ) => {
  const [activityDetails, setActivityDetails] = useState({})
  // const { activityName } = useParams()
  const location = useLocation()
  console.log(location)
  const key = location.state.soloActivity 
    ? location.state.soloActivity.key 
    : location.state.groupActivity.key

  console.log("this is the key", key)


  useEffect(() => {
    const fetchActivityDetails = async () => {
      const activityData = await getActivityDetails(key)
      setActivityDetails(activityData)
    }
    fetchActivityDetails()
  }, [key])
  console.log(key)

  const handleAddUserActivity = async (newApiActivityData) => {
    const updatedApiProfile = await profileService.add()
  }

  }

  return (
    <>
      <div className={styles.detailsPage}>
        {activityDetails.activity ?
        <>
          <div className={styles.activityDetails}>
            <div className={styles.activityName}>
              <h4>ACTIVITY:</h4>
              <p>
              {activityDetails.activity}
              </p>
            </div>
            <div className={styles.activityType}>
              <h4>TYPE:</h4>
              {activityDetails.type}
            </div>
            <div className={styles.activityPartic}>
              <h4>PARTICIPANTS:</h4>
              {activityDetails.participants}
            </div>
            <div className={styles.activityPrice}>
              <h4>PRICE:</h4>
              {activityDetails.price}
            </div>
            <div className={styles.activityAccessibility}>
              <h4>ACCESSIBILITY:</h4>
              {activityDetails.accessibility}
            </div>
            <div className={styles.returnContainer}>
              <br />
              <Link className={styles.returnLink} to="/">Return Home</Link>
              <Link className={styles.returnLink} to="/search">Return to Search</Link>
            </div>
          </div>
        </>
        :
        <>
          <p>Loading activity details...</p>
          <div className='returnContainer'>
            <Link className='returnLink' to="/">Return</Link>
          </div>
        </>
      }
      </div>
    </>
  )
}

export default ActivityDetails