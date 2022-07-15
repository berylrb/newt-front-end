import styles from '../Landing.module.css'

import { useState, useEffect } from 'react'
import { getGroupActivity } from '../../../services/bored-api'
import { Link } from 'react-router-dom'


const GroupActivity = () => {
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
      <div>
        <div className={styles.groupLinkDiv}>
          {/* {soloActivity.map(soloActivityName =>
            <Link className="activity-link" to="/activity" state={{soloActivityName}}>
              <div className="solo-div" key={soloActivityName.index}>{soloActivityName.activity}</div>
            </Link> */}
          {/* )} */}
          <Link className={styles.activityLink} to="/activity" state={{groupActivity}}>
            {groupActivity?.activity}
          </Link>
        </div>
      </div>
    
    
    </>
  )
}


export default GroupActivity