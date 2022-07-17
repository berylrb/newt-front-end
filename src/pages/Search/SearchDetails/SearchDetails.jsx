import { useState, useEffect } from 'react';
import { getActivityDetails } from '../../../services/bored-api';
// import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import styles from './SearchDetails.module.css'
import { Link } from 'react-router-dom';

const SearchDetails = () => {
  const [searchDetails, setSearchDetails] = useState({})
  // const location = useLocation()
  // const { key } = location.state.search.key
  const { activityName } = useParams()

  useEffect(() => {
    const fetchSearchDetails = async () => {
      const searchData = await getActivityDetails(activityName)
      setSearchDetails(searchData)
    }
    fetchSearchDetails()
  }, [activityName])
  return (
    <>
      <div className={styles.detailsPage}>
        {searchDetails.activity ?
        <>
          <div className={styles.activityDetails}>
            <div className={styles.activityName}>
              <h4>ACTIVITY:</h4>
              <p>
              {searchDetails.activity}
              </p>
            </div>
            <div className={styles.activityType}>
              <h4>TYPE:</h4>
              {searchDetails.type}
            </div>
            <div className={styles.activityPartic}>
              <h4>PARTICIPANTS:</h4>
              {searchDetails.participants}
            </div>
            <div className={styles.activityPrice}>
              <h4>PRICE:</h4>
              {searchDetails.price}
            </div>
            <div className={styles.activityAccessibility}>
              <h4>ACCESSIBILITY:</h4>
              {searchDetails.accessibility}
            </div>
            <div className={styles.returnContainer}>
              <br />
              <Link className={styles.returnLink} to="/">Return</Link>
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

export default SearchDetails;