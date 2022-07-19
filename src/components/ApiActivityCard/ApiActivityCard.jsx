import styles from './ApiActivityCard.module.css'

const ApiActivityCard = (props) => {
  console.log('props', props)
  
  return (
    <div className={styles.cardHolder}>
      {props.activity.activity}
    </div>
  )
}

export default ApiActivityCard