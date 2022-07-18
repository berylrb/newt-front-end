import { useState, useRef, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import styles from './Profile.module.css'
import UserActivity from "../../components/UserActivity/UserActivity"
import { show } from "../../services/profileService"

const Profile = ({handleAddUserActivity, handleDeleteUserActivity, user, userActivity}) => {
  const [validForm, setValidForm] = useState(false)
  const {id} = useParams()
  const formElement = useRef()
  const {state} = useLocation()
  console.log("Profiles are not working", state)
  const [profile, setProfile] = useState()

  const [formData, setFormData] = useState({
    activity: '',
    type: '',
    price: 0,
    participants: 0
  })

  console.log('profile', profile, 'user', user, 'userid', user._id, 'profileid', profile?._id)

  useEffect(() => {
    const fetchProfile = async() => {
      const profileData = await show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddUserActivity(formData)
  }

  return ( 
    <>
      <div className={styles.profileBg}>
        <div className={styles.profilePageContents}>
          <div className={styles.profileGreeting}>
            <h4>Hi, {profile?.name}</h4>
          </div>
          <div className={styles.addActivityForm}>
            <form 
              autoComplete="off" 
              onSubmit={handleSubmit}
              ref={formElement}>
              <div>
                <label htmlFor="activity-name">Activity</label>
                <input 
                  type="text"
                  className="activity-name"
                  id="name-input"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="activity-type">Type</label>
                <input 
                  type="text"
                  className="activity-type"
                  id="type-input"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="activity-price">Price</label>
                <input 
                  type="text"
                  className="activity-price"
                  id="price-input"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="activity-participants">Participant #</label>
                <input 
                  type="text"
                  className="activity-participants"
                  id="participant-input"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                />
              </div>
                <button 
                type="submit"
                disabled={!validForm}>
                Add Activity!
                </button>
              </form>
            </div>
        </div>
        <div>
          {userActivity?.map(activity =>
            <UserActivity
            key={activity._id} 
            activity={activity}
            handleDeleteUserActivity={handleDeleteUserActivity}
            />
            )} 
        </div>
        <div>
          <h4>Saved Activities</h4>
        </div>
        <div>
          <h4>Done Activities</h4>
        </div>
      </div>
    </>
  );
}

export default Profile;