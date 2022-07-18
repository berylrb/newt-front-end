
const UserActivity = (props) => {
  console.log(props)
  return (

    <div>
      <ul>
        <li>{props.activity.activity}</li>
        <li>{props.activity.type}</li>
        <li>${props.activity.price}</li>
        <li>How many peeps: {props.activity.participants}</li>
      </ul>
    </div>
  )
}

export default UserActivity