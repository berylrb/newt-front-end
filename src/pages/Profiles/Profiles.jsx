import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import  styles from './Profiles.module.css'
import { Link } from 'react-router-dom'
import Placeholder from '../../assets/placeholder.jpg'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])


  useEffect(()=> {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <div className={styles.communityBg}>
        <div className={styles.communityHeader}>
          <h1 className={styles.newtCommunityH1}>NEWT COMMUNITY</h1>
        </div>
        {profiles.length ? 
          <>
            <div className={styles.cardContainer}>
              {profiles.map(profile=>
                <Link 
                key={profile._id}
                to={`/profiles/${profile._id}`}
                state={profile}
                className={styles.profileNameLink}>
                <div key={profile._id}>
                  <div className={styles.profileCard}>
                    <div className={styles.profilePicDiv}>
                      <img className={styles.profilePic} src={`${profile?.photo || Placeholder}`} alt="profile-pic" profile={profile} />
                    </div>
                    <div className={styles.profileNameDiv}>
                      <p className={styles.profNameP} key={profile._id} profile={profile}>{profile.name}</p>
                    </div>
                  </div>
                </div>
                </Link>
              )}
            </div>
            
          </>
        :
          <p>No profiles yet</p>
        }
      </div>
    </>
  )
}

export default Profiles