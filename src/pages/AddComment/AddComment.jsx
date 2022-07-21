
import { useState } from "react"
import styles from './AddComment.module.css'
import { addComment } from "../../services/activityService"

const AddComment = (props, {user}) => {
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
      console.log('saved activity test', props.savedActivity)
      const updatedActivity = await addComment(props.savedActivity._id,
        formData)
        props.setSavedActivity(updatedActivity)
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
          
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h3 className={styles.headerH3}>Add a comment</h3>
            </div>
            <form 
              onSubmit={handleSubmitComment}
              autoComplete="off"
              className={styles.formBody}
            >
              <div className={styles.inputContainer}>
                <textarea
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