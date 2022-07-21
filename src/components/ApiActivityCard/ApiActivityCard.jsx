import styles from './ApiActivityCard.module.css'
import pinkStar from '../../assets/pink-star.png'

const ApiActivityCard = (props, {user}) => {
  return (
  <>
    <div className={styles.cardHolder}>
    <div className={styles.star}>
    <img className={styles.starBulletImg} src={pinkStar} alt="pink star bullet" />
    </div>
    <div className={styles.activityProp}>
    {props.activity.activity}
    </div>
  {/* {props.user?.profile === props.profile?._id ?
  <>
    <div>
      <button onClick={() => props.addToDoneActivities(props.activity, props.idx)}>-></button>
    </div>
  </>
  :
  <>
    <p></p>
  </>
  } */}
  </div>
  </>
  )
}

export default ApiActivityCard