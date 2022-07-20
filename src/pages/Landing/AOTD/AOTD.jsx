import styles from '../Landing.module.css'
import SoloActivity from './SoloActivity'
import GroupActivity from './GroupActivity'

const AOTD = ({user}) => {
  return (
    <>
      <main className={styles.aotdContainer}>
        <h1>Become an object in motion.</h1>
        <div className={styles.aotdBg}>
          <h2 className={styles.h2}>RANDOM ACTIVITY</h2>
          <div className={styles.soloDiv}>
            <h4 className={styles.h4SoloGroup}>Solo</h4>
            <SoloActivity user={user}/>
          </div>
          <div className={styles.groupDiv}>
            <h4 className={styles.h4SoloGroup}>Group</h4>
            <GroupActivity user={user}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default AOTD