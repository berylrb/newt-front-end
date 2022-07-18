import { useState } from "react";
import { Link } from "react-router-dom";

const EditUserActivity = () => {

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
          <label htmlFor="activity-participants">Participants</label>
          <input 
          type="text" 
          className="activity-participants"
          id="participant-input"
          name="participants"
          value={formData.participants}
          />
        </div>
      </form>
    </>
   );
}
 
export default EditUserActivity;