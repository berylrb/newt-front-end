import styles from '../Landing.module.css'
import SoloActivity from './SoloActivity'
import GroupActivity from './GroupActivity'

const AOTD = () => {
  return (
    <>
      <main className={styles.aotdContainer}>
      <h1>Become an object in motion.</h1>
        <div className={styles.aotdBg}>
          <h2 className={styles.h2}>ACTIVITY OF THE DAY</h2>
          <div className={styles.soloDiv}>
            <h4 className={styles.h4SoloGroup}>Solo</h4>
            <SoloActivity />
          </div>
          <div className={styles.groupDiv}>
            <h4 className={styles.h4SoloGroup}>Group</h4>
            <GroupActivity />
          </div>
        </div>
      </main>

    </>
  )
}

export default AOTD