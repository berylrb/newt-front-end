import styles from './ApiActivityCard.module.css'
import pinkStar from '../../assets/pink-star.png'

const ApiActivityCard = (props) => {
  return (
    <div className={styles.cardHolder}>
      <div className={styles.star}>
        <img class={styles.starBulletImg} src={pinkStar} alt="pink star bullet" />
      </div>
      <div className={styles.activityProp}>
        {props.activity.activity}
      </div>
    </div>
  )
}

export default ApiActivityCard