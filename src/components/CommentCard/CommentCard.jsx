
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { show } from "../../services/profileService"
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  const {id} = useParams()
  const [profile, setProfile] = useState()
  const activityId = props.activityDetails._id
  const commentId = props.comment._id

  console.log('comment id', commentId, 'activity id', activityId)



  console.log(profile)

useEffect(() => {
  const fetchProfile = async() => {
    const profileData = await show(id)
    setProfile(profileData)
  }
  fetchProfile()
}, [id])

return (
  <>
    <div className={styles.commentCardContainer}>
      <div className={styles.commentContent}>
        <p>{props.comment.comment}</p>
      </div>
      {/* {profile?.name === props.comment.author &&
        <div className={styles.deleteButtonDiv}>
          <button onClick={() => props.handleDeleteComment(activityId, commentId)}>Delete Comment</button>
        </div>
      } */}
    </div>
  </>
  )
}


export default CommentCard