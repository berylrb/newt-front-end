import styles from '../Landing.module.css'

import { useState, useEffect } from 'react'
import { getGroupActivity } from '../../../services/bored-api'
import { Link } from 'react-router-dom'


const GroupActivity = ({user}) => {
  const [groupActivity, setGroupActivity] = useState()

  console.log("group activity key", groupActivity?.key)

  useEffect(() => {
    const fetchGroupActivity = async () => {
      const groupData = await getGroupActivity()
      setGroupActivity(groupData)
    }
    fetchGroupActivity()
  }, [])

  return (
    <>
    {user ?
      <div>
        <div className={styles.groupLinkDiv}>
          
          <Link className={styles.activityLink} to="/activity" state={{groupActivity}}>
            {groupActivity?.activity}
          </Link>
        </div>
      </div>
    :
      <div>
        <div className={styles.groupLinkDiv}>
        
          <Link className={styles.activityLink} to="/login">
            {groupActivity?.activity}
          </Link>
        </div>
      </div>
    }
    
    </>
  )
}



export default GroupActivity