import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as profileService from '../../services/profileService'
import styles from './EditUserActivity.module.css'

const EditUserActivity = ({activity}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    activity: location.state.activity,
    type: location.state.type,
    price: location.state.price,
    participants: location.state.participants
  })
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  console.log('location surprise', location)

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleUpdateActivity = async () => {
    const updatedProfile = await profileService.update(location.state._id, formData)
    navigate(`/profiles/${updatedProfile._id}`)
    console.log('updated prof', updatedProfile)
  }

  const handleSubmit = evt => {
		evt.preventDefault()
    handleUpdateActivity(formData)
	}


  return ( 
    <>
      <div className={styles.editPage}>
        <div className={styles.editFormBg}>
          <div className={styles.formDiv}>
            <div className={styles.editHeader}>
              <h4 className={styles.editH4}>UPDATE ACTIVITY DETAILS</h4>
            </div>
            <form 
              autoComplete="off" 
              ref={formElement} 
              onSubmit={handleSubmit}
              className={styles.container}
              >
              <div className={styles.inputContainer}>
                <label htmlFor="activity-name" className={styles.label}>Activity</label>
                <input 
                type="text" 
                className="activity-name"
                id="name-input"
                name="activity"
                value={formData.activity || ''}
                onChange={handleChange}
                />
              </div>
              <div className={styles.inputContainer}>
              <label htmlFor="activity-type">Type</label>
                <select className={styles.label} name="type" id="type" onChange={handleChange} required>
                  <option value=''>Type</option>
                  <option name="query" value="education">Education</option>
                  <option name="recreational" value="recreational">Recreational</option>
                  <option name="social" value="social">Social</option>
                  <option name="diy" value="diy">DIY</option>
                  <option name="charity" value="charity">Charity</option>
                  <option name="cooking" value="cooking">Cooking</option>
                  <option name="relaxation" value="relaxation">Relaxation</option>
                  <option name="music" value="music">Music</option>
                  <option name="busywork" value="busywork">BusyWork</option>
                </select>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="activity-price" className={styles.label}>Price</label>
                <select className={styles.selectPrice} name="price" id="price"onChange={handleChange}>
                  <option value=''>Price</option>
                  <option value="free">Free</option>
                  <option value="$">$</option>
                  <option value="$$">$$</option>
                  <option value="$$$">$$$</option>
                  <option value="$$$$">$$$$</option>
                </select>
              </div>
                <button
                  type="submit"
                  disabled={!validForm}
                  className={styles.button6}
                >
                  UPDATE ACTIVITY
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUserActivity;