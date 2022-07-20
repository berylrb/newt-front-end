import styles from './ApiActivityCard.module.css'
import pinkStar from '../../assets/pink-star.png'

const ApiActivityCard = (props, {user}) => {
  return (
    <>
    {user?.profile === props.profile?._id ?
      <>
      <div className={styles.cardHolder}>
      <div className={styles.star}>
      <img class={styles.starBulletImg} src={pinkStar} alt="pink star bullet" />
      </div>
      <div className={styles.activityProp}>
      {props.activity.activity}
      </div>
      {/* <button onClick={() => props.addToDoneActivities(props.activity)}>+</button> */}
      </div>
      </>
      :
      <>
      
      </>
    }
  </>
  )
}

export default ApiActivityCard