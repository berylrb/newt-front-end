import { useState, useRef, useEffect } from "react"

const Profile = (props) => {

  // useEffect(() => {
  //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // }, [formData])

  const handleSubmit = evt => {
    //handle submit function for add activity
  }

  return ( 
    <>
      <h1>Profile Page</h1>
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
              />
            </div>
            <div>
            <label htmlFor="activity-type">Type</label>
            <input 
              type="text"
              className="activity-type"
              id="type-input"
              name="type"
              />
            </div>
            <div>
            <label htmlFor="activity-name">Price</label>
            <input 
              type="text"
              className="activity-price"
              id="price-input"
              name="price"
              />
            </div>
            <div>
            <label htmlFor="activity-name">Participant #</label>
            <input 
              type="text"
              className="activity-participant"
              id="participant-input"
              name="participant"
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