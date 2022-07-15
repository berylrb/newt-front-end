// import styles from '../Landing.module.css'

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

  return (
    <>
      <div>
        <div className="soloDiv">
          {/* {soloActivity.map(soloActivityName =>
            <Link className="activity-link" to="/activity" state={{soloActivityName}}>
              <div className="solo-div" key={soloActivityName.index}>{soloActivityName.activity}</div>
            </Link> */}
          {/* )} */}
          <Link className="activity-link" to="/activity" state={{soloActivity}}>
            {soloActivity?.activity}
          </Link>
        </div>
      </div>
    
    
    </>
  )
}


export default SoloActivity