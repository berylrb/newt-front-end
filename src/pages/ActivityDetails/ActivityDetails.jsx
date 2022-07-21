import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getActivityDetails } from '../../services/bored-api'
import { useLocation, useNavigate } from 'react-router-dom'
import  styles from './ActivityDetails.module.css'
import * as profileService from '../../services/profileService'
import * as activityService from '../../services/activityService'
import CommentSection from '../../components/CommentSection/CommentSection'
import ProfileApiActivities from '../../components/ProfileApiActivities/ProfileApiActivities'

const ActivityDetails = ( {user} ) => {
  const [activityDetails, setActivityDetails] = useState({})
  const location = useLocation()
  const [savedActivity, setSavedActivity] = useState()
  // const [show, setShow] = useState(false)
  const navigate = useNavigate()
  console.log(location)
  const key = location.state.soloActivity 
    ? location.state.soloActivity.key 
    : location.state.groupActivity.key

  console.log("this is the key", key)


  useEffect(() => {
    const fetchActivityDetails = async () => {
      const activityData = await getActivityDetails(key)
      const res = await activityService.findCommentsByKey(key)
      // if (!res) {
      // }
      setSavedActivity(res)
      console.log('res', res)
      setActivityDetails(activityData)
    }
    fetchActivityDetails()
  }, [key])
  console.log(key)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log('user', user.profile, activityDetails)
    const activity = await profileService.addApiActivity(user.profile, activityDetails)
    setSavedActivity(activity)
    // setShow(true)
    console.log('activity', activity)
  }

  const buttonSubmit = async evt => {
    navigate('/')

  }

  // const handleAddApiActivity = async (newApiActivityData) => {
  //   
  // }
  console.log('activity details', activityDetails)
  console.log('saved activity', savedActivity)

  return (
    <>
      <div className={styles.detailsPage}>
      {activityDetails.activity ?
      <>
        <div className={styles.activityDetails}>
          <div className={styles.detailsHeader}>
            <h4 className={styles.detailsH4}>ACTIVITY DETAILS</h4>
          </div>
          <table className={styles.table}>
            <tr>
              <th className={styles.th}>ACTIVITY</th>
              <th className={styles.th}>TYPE</th>
              <th className={styles.th}>PRICE</th>
            </tr>
            <tr>
              <td className={styles.td}>{activityDetails.activity}</td>
              <td className={styles.td}>{activityDetails.type}</td>
              <td className={styles.td}>${activityDetails.price}</td>
            </tr>
          </table>
          
            <div className={styles.CommentSectionDiv}>
              
            </div>
            <div className={styles.returnContainer}>
              <br />
              {handleSubmit.activity >= 0  ?
              <>
                <p>Wanna save this activity? Add it to your list!</p>
                <button onClick={handleSubmit} className={styles.addButton}>Add to List</button>
              </>
              :
              <>
                <p> </p>
              </>
              }
              <button className={styles.button6} onClick={buttonSubmit}>Go Back</button>
              
            </div>
            {savedActivity &&
              
              <CommentSection 
                savedActivity={savedActivity}
                setSavedActivity={setSavedActivity}
                profile={user?.profile}
              />
            }
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