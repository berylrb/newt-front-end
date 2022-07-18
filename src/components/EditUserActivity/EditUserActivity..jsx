import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EditUserActivity = (props) => {

  const location = useLocation()
  const [formData, setFormData] = useState(location.state.userActivity)
  const [validForm, setValidForm] = useState(true)

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  return ( 
    <>
    <h2>Edit Your Activity</h2>
      <form autoComplete="off">
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
            Edit Your Activity
          </button>
        </div>
      </form>
    </>
   );
}
 
export default EditUserActivity;