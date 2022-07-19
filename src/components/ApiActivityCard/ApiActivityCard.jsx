import styles from './ApiActivityCard.module.css'

const ApiActivityCard = (props) => {
  console.log('props', props)
  
  return (
    <div className={styles.cardHolder}>
      <h4>Activity:</h4>
        <p>{props.activity.activity}</p>
    </div>
  )
}

export default ApiActivityCard