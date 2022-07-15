import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getActivityDetails } from '../../services/bored-api'
import { useLocation } from 'react-router-dom'
import  styles from './ActivityDetails.module.css'

const ActivityDetails = () => {
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
  return (
    <>
      <div className={styles.detailsPage}>
        {activityDetails.activity ?
        <>
          <div className={styles.activityDetails}>
            {/* <table>
              <tr>
                <th>Activity</th>
                <th>Type</th>
                <th>Participants</th>
                <th>Price</th>
                <th>Accessibility</th>
              </tr>
              <tr>
                <td>{activityDetails.activity}</td>
                <td>{activityDetails.type}</td>
                <td>{activityDetails.participants}</td>
                <td>{activityDetails.price}</td>
                <td>{activityDetails.accessibility}</td>
              </tr>

            </table> */}
            <div className='activityName'>
              <h4>Activity:</h4>
              {activityDetails.activity}
            </div>
            <div className={styles.activityType}>
              <h4>Type:</h4>
              {activityDetails.type}
            </div>
            <div className={styles.activityPartic}>
              <h4>Participants:</h4>
              {activityDetails.participants}
            </div>
            <div className={styles.activityPrice}>
              <h4>Price:</h4>
              {activityDetails.price}
            </div>
            <div className={styles.activityAccess}>
              <h4>Accessibility:</h4>
              {activityDetails.accessibility}
            </div>
            <div className='returnContainer'>
              <Link className='returnLink' to="/">Return</Link>
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