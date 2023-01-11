import CommentCard from "../CommentCard/CommentCard"
import AddComment from "../../pages/AddComment/AddComment"
// import ActivityDetails from "../../pages/ActivityDetails/ActivityDetails"
import styles from './CommentSection.module.css'
import { Link } from "react-router-dom"


const CommentSection = (props) => {
  console.log('activity saved', props.savedActivity.comments)
  return (
    <>
      <div className={styles.commentSectionBody}>
        {props.savedActivity?.comments?.length ? 
          <>
            <div className={styles.commentSectionHeader}>
              {/* <h3 className={styles.commentHeaderH3}>
                Comments:
              </h3> */}
            </div>
            <div className={styles.commentCards}>
              {props.savedActivity?.comments.map( comment => (
                <CommentCard 
                key={comment._id}
                comment={comment}
                profile={props.profile}
                savedActivity={props.savedActivity}
                setSavedActivity={props.setSavedActivity}
                // handleDeleteComment={handleDeleteComment}
              />
              ))}
            </div>
            <div className={styles.addCommentDiv}>
            <AddComment
                  savedActivity={props.savedActivity}
                  setSavedActivity={props.setSavedActivity}
                />
            </div>
          </>
          :
          <>
            <div className={styles.noCommentsDiv}>
              <p className={styles.noCommentP}>No comments yet  ¯\_(ツ)_/¯</p>
            </div>
            <div className={styles.addCommentDiv}>
            <AddComment
                  savedActivity={props.savedActivity}
                  setSavedActivity={props.setSavedActivity}
                />
            </div>
          </>
        }
      </div>
    </>
  )
}

export default CommentSection