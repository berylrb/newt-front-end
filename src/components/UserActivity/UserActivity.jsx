
const UserActivity = (props) => {
  console.log(props)
  return (

    <div>
      <ul>
        <li>{props.activity.activity}</li>
        <li>{props.activity.type}</li>
        <li>${props.activity.price}</li>
        <li>How many peeps: {props.activity.participants}</li>
        <button onClick={() => props.handleDeleteUserActivity(props.activity._id)}>Delete</button>
      </ul>
    </div>
  )
}

export default UserActivity