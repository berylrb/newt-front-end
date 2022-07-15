import { useState, useRef, useEffect } from "react"

const Profile = ({user}) => {

  const [formData, setFormData] = useState({
    activity: '',
    type: '',
    price: 0,
    participants: 0
  })

  // useEffect(() => {
  //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // }, [formData])

  const handleSubmit = evt => {
    //handle submit function for add activity
  }

  return ( 
    <>
      <h1>Profile Page</h1>
      <h2>{user.name}</h2>
      <div>
        Add an Activity
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="activity-name">Activity</label>
            <input 
              type="text"
              className="activity-name"
              id="name-input"
              name="name"
              value={formData.activity}
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
              />
            </div>
          Add!</form>
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