
import styles from './CommentCard.module.css'

const CommentCard = (props) => {
  const activityId = props.savedActivity._id
  const commentId = props.comment._id

  console.log('comment id', commentId, 'activity id', activityId)



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