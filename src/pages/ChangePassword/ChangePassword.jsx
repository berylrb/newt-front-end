import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import styles from './ChangePassword.module.css'
import Blob from '../../assets/corner-blob.png'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <div className={styles.pwBg}>
      <div className={styles.imgDiv}>
        <img className={styles.bgTopBlob} src={Blob} alt="corner blob" />
      </div>
      <main className={styles.pwContainer}>
        <div className={styles.pwFormBg}>
          <h2 className={styles.h2}>Change Password</h2>
          <p>{message}</p>
          <ChangePasswordForm {...props} updateMessage={updateMessage} />
        </div>
      </main>
      <div className={styles.imgDiv}>
        <img className={styles.bgBottomBlob} src={Blob} alt="corner blob" />
      </div>
    </div>
  )
}

export default ChangePassword
