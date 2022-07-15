import styles from '../Landing.module.css'

const AOTD = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.aotdBg}>
          <h2 className={styles.h2}>ACTIVITY OF THE DAY</h2>
          <div className={styles.soloDiv}>
            <h4>Solo</h4>
          </div>
          <div className={styles.groupDiv}>
            <h4>Group</h4>
          </div>
        </div>
      </main>

    </>
  )
}

export default AOTD