import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const EditUserActivity = ({activity, handleUpdateActivity}) => {

  const location = useLocation()
  console.log(location)
  const [formData, setFormData] = useState(location.state.activity)
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

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
          <label htmlFor="activity-participants">Participants</label>
          <input 
          type="text" 
          className="activity-participants"
          id="participant-input"
          name="participants"
          value={formData.participants}
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