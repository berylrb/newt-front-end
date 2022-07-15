import styles from './Landing.module.css'
import AOTD from './AOTD/AOTD'

const Landing = ({ user }) => {
  return (
    <>
      <div className="landing-bg">
        <main className={styles.container}>
          <h1>Become an object in motion.</h1>
          <AOTD />
        </main>
      </div>
    </>
  )
}

export default Landing
