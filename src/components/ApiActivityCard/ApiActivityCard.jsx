import styles from './ApiActivityCard.module.css'

const ApiActivityCard = (props) => {
  console.log(props)
  
  return (
    <div className={styles.cardHolder}>
      <h4>Activity:</h4>
        <p>{props.activity.activity}</p>
        <h4>Type:</h4>
        <p>{props.activity.type}</p>
        <h4>Price:</h4>
        <p>${props.activity.price}</p>
        <h4>Participants:</h4>
        <p>{props.activity.participants}</p>
    </div>
  )
}

export default ApiActivityCard