import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getActivityDetails } from '../../services/bored-api'
import { useLocation } from 'react-router-dom'

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
      <div className='detailsPage'>
        {activityDetails.activity ?
        <>
          <div className='activityDetails'>
            <div className='activityName'>
              <h3>Activity:</h3>
              {activityDetails.activity}
            </div>
            <div className='activityType'>
              {activityDetails.type}
            </div>
            <div className='activityPartic'>
              {activityDetails.participants}
            </div>
            <div className='activityPrice'>
              {activityDetails.price}
            </div>
            <div className='activityAccess'>
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