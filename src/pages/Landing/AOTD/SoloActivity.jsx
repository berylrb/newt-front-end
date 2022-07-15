import styles from '../Landing.module.css'

import { useState, useEffect } from 'react'
import { getSoloActivity } from '../../../services/bored-api'
import { Link } from 'react-router-dom'


const SoloActivity = () => {
  const [soloActivity, setSoloActivity] = useState()


  useEffect(() => {
    const fetchSoloActivity = async () => {
      const soloData = await getSoloActivity()
      setSoloActivity(soloData)
    }
    fetchSoloActivity()
  }, [])
  console.log("solo activity component", soloActivity?.key)
  return (
    <>
      <div>
        <div className={styles.soloLinkDiv}>
          
          <Link className={styles.activityLink} to="/activity" state={{soloActivity}}>
            {soloActivity?.activity}
          </Link>
        </div>
      </div>
    
    
    </>
  )
}


export default SoloActivity