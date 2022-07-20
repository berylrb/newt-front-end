import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import Blob from '../../assets/corner-blob.png'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <div className={styles.loginBg}>
        <img className={styles.bgTopBlob} src={Blob} alt="corner blob" />
        <main className={styles.loginContainer}>
          <div className={styles.loginFormBg}>
            <h2 className={styles.h2}>LOG IN</h2>
            <p>{message}</p>
            <LoginForm
              handleSignupOrLogin={props.handleSignupOrLogin}
              updateMessage={updateMessage}
            />
          </div>
        </main>
        <img className={styles.bgBottomBlob} src={Blob} alt="corner blob" />
      </div>
    </>
  )
}

export default LoginPage