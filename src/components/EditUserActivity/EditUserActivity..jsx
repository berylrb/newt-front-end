import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as profileService from '../../services/profileService'

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
      <h1>Edit Your Activity</h1>
      <form 
        autoComplete="off" 
        ref={formElement} 
        onSubmit={handleSubmit}
        >
        <div>
          <label htmlFor="activity-name">Activity</label>
          <input 
          type="text" 
          className="activity-name"
          id="name-input"
          name="activity"
          value={formData.activity || ''}
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
          value={formData.type || ''}
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
          value={formData.price || ''}
          onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="activity-participants">Participants</label>
          <input 
          type="text" 
          className="activity-participants"
          id="participant-input"
          name="participants"
          value={formData.participants || ''}
          onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={!validForm}
          >
            Save Activity
          </button>
        </div>
      </form>
    </>
  );
}

export default EditUserActivity;