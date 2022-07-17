import styles from './Landing.module.css'
import AOTD from './AOTD/AOTD'
import Blob from '../../assets/corner-blob.png'

const Landing = ({ user }) => {
  return (
    <>
      <div className={styles.landingBg}>
        <img className={styles.bgTopBlob} src={Blob} alt="corner blob" />
        <main className={styles.container}>
          <AOTD user={user}/>
        </main>
        <img className={styles.bgBottomBlob} src={Blob} alt="corner blob" />
      </div>
    </>
  )
}

export default Landing
