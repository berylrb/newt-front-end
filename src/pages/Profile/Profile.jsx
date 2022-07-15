import { useState, useRef, useEffect } from "react"

const Profile = ({user, handleAddUserActivity}) => {
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()

  const [formData, setFormData] = useState({
    activity: '',
    type: '',
    price: 0,
    participants: 0
  })

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
      <h1>Profile Page</h1>
      <h2>{user.name}</h2>
      <div>
        <form 
        autoComplete="off" 
        onSubmit={handleSubmit}
        ref={formElement}
        >
          <div>
            <label htmlFor="activity-name">Activity</label>
            <input 
              type="text"
              className="activity-name"
              id="name-input"
              name="name"
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
              disabled={!validForm}
              >
              Add Activity!
            </button>
          </form>
        </div>
      <div>
        Saved Activities
      </div>
      <div>
        Done Activities
      </div>
    </>
   );
}
 
export default Profile;