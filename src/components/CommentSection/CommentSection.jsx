import CommentCard from "../CommentCard/CommentCard"
import AddComment from "../../pages/AddComment/AddComment"
// import ActivityDetails from "../../pages/ActivityDetails/ActivityDetails"
import styles from './CommentSection.module.css'
import { Link } from "react-router-dom"


const CommentSection = (props) => {
  return (
    <>
      <div className={styles.commentSectionBody}>
        {props.activityDetails.comments.length ?
          <>
            <div className={styles.commentSectionHeader}>
              <h3 className={styles.commentHeaderH3}>
                Comments:
              </h3>
            </div>
            <div className={styles.commentCards}>
              {props.activityDetails?.comments.map( comment => (
                <CommentCard 
                key={comment._id}
                comment={comment}
                profile={props.profile}
                activityDetails={props.activityDetails}
                setActivityDetails={props.setActivityDetails}
                // handleDeleteComment={handleDeleteComment}
              />
              ))}
                <AddComment
                  activityDetails={props.activityDetails}
                  setActivityDetails={props.setActivityDetails}
                />
            </div>
          </>
          :
          <>
            <div className={styles.noCommentsDiv}>
              <p>No comments yet  ¯\_(ツ)_/¯</p>
            </div>
            <div className={styles.addCommentDiv}>
              <Link
              to="/activity/:activityName/addComment"
                activityDetails={props.activityDetails}
                setActivityDetails={props.setActivityDetails}
                >

                </Link>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default CommentSection