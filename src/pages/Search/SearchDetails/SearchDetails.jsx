import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getActivityDetails } from '../../../services/bored-api'
import { useLocation, useNavigate } from 'react-router-dom'
import  styles from './SearchDetails.module.css'
import * as profileService from '../../../services/profileService'
import * as activityService from '../../../services/activityService'
import { useParams } from 'react-router-dom'
import CommentSection from '../../../components/CommentSection/CommentSection'



const SearchDetails = ({user}) => {
  const [searchDetails, setSearchDetails] = useState({})
  // const location = useLocation()
  // const { key } = location.state.search.key
  const { activityName } = useParams()
  const navigate = useNavigate()
  const [savedActivity, setSavedActivity] = useState()

  useEffect(() => {
    const fetchSearchDetails = async () => {
      const searchData = await getActivityDetails(activityName)
      const res = await activityService.findCommentsByKey(activityName)
      setSavedActivity(res)
      setSearchDetails(searchData)
    }
    fetchSearchDetails()
  }, [activityName])


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log('user', user.profile, searchDetails)
    const activity = await profileService.addApiActivity(user.profile, searchDetails)
    setSavedActivity(activity)
    // setShow(true)
    console.log('activity', activity)
  }

  const buttonSubmit = async evt => {
    navigate('/search')

  }

  return (
    <>
      <div className={styles.detailsPage}>
        {searchDetails.activity ?
        <>
          <div className={styles.activityDetails}>
          <div className={styles.detailsHeader}>
            <h4 className={styles.detailsH4}>ACTIVITY DETAILS</h4>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.th}>ACTIVITY</th>
                <th className={styles.th}>TYPE</th>
                <th className={styles.th}>PRICE</th>
              </tr>
              <tr>
                <td className={styles.td}>{searchDetails.activity}</td>
                <td className={styles.td}>{searchDetails.type}</td>
                <td className={styles.td}>${searchDetails.price}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.CommentSectionDiv}>
              
            </div>
            <div className={styles.returnContainer}>
              <br />
              {savedActivity >= 0  ?
              <>
                <p className={styles.pSave}>Wanna save this activity? Add it to your list!</p>
                <button onClick={handleSubmit} className={styles.addButton}>Add to List</button>
              </>
              :
              <>
                <p className={styles.pSave}> </p>
              </>
              }
              <button className={styles.button6} onClick={buttonSubmit}>Go Back</button>
            </div>
            
          </div>
      </>
      :
      <>
        <div className={styles.activityDetails}>
        <div className={styles.detailsHeader}>
            <h4 className={styles.detailsH4}>ACTIVITY DETAILS</h4>
          </div>
          <p>Loading activity details...</p>
          <div className='returnContainer'>
            <Link className='returnLink' to="/search">Return</Link>
          </div>
        </div>
      </>
      }
      {savedActivity &&
        <div className={styles.activityDetailsBottom}>
          <div className={styles.detailsHeaderBottom}>
            <h4 className={styles.detailsH4Bottom}>COMMUNITY COMMENTS</h4>
          </div>
          <div className={styles.commentHolder}>
                  <CommentSection 
                    savedActivity={savedActivity}
                    setSavedActivity={setSavedActivity}
                    profile={user?.profile}
                  />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default SearchDetails;