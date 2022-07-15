import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getActivityDetails } from '../../services/bored-api'

const ActivityDetails = () => {
  const [activityDetails, setActivityDetails] = useState({})
  const location = useLocation()


  useEffect(() => {
    const fetchDetails = async () => {
      const activityDetails = await getActivityDetails(location.state.activityName.url)
      setActivityDetails(activityDetails)
    }
    fetchDetails()
  }, [location.state.activityName.url])

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