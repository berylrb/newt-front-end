import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <>
      <div className="landing-bg">
        <main className={styles.container}>
          <h1>hello, {user ? user.name : 'friend'}</h1>
        </main>
      </div>
    </>
  )
}

export default Landing
