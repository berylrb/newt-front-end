import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.signupContainer}>
      {/* <div className={styles.flowerdivDiv}>
        <div className={styles.flowerDiv}>
          <img src={flowers} className={styles.flowerImg} alt="flower-blobs" />
        </div>
      </div> */}
        <div className={styles.signupFormBg}>
          <p>{message}</p>
          <SignupForm {...props} updateMessage={updateMessage} />
        </div>
    </main>
  )
}

export default Signup
