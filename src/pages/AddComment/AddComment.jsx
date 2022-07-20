
import { useState } from "react"
import styles from './AddComment.module.css'
import { addComment } from "../../services/activityService"

const AddComment = (props, {user}) => {
  const [activityDetails, setActivityDetails] = useState({})
  const [formData, setFormData] = useState({
    comment: '',
  })

  const handleChangeComment = evt => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmitComment = async evt => {
    evt.preventDefault()
    try {
      const updatedActivity = await addComment(activityDetails._id,
        formData)
        setActivityDetails(updatedActivity)
    } catch (err) {
      console.log(err)
    }
  }

  const {comment} = formData
  const isFormInvalid = () => {
    return !(comment)
  }


  return (
    <>
      <main>
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h3>Add a comment</h3>
          </div>
          <div className={styles.formContainer}>
            <form 
              onSubmit={handleSubmitComment}
              autoComplete="off"
              className={styles.formBody}
            >
              <div className={styles.inputContainer}>
                <input 
                  type="text"
                  id="commentInput"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChangeComment}
                />
              </div>
              <div className={styles.commentButtonDiv}>
                <button className={styles.button6} disabled={isFormInvalid}>
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )

}

export default AddComment