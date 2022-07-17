import styles from '../Search.module.css'

import { Link } from 'react-router-dom'

const SearchCard = (props) => {


  return ( 
    <>
      {/* <div className={styles.searchCard}> */}
        <div className={styles.resultDiv}>
          <Link className={styles.activityLink} to={`/activity/${props.search.key}`}>
            {props.search.activity}
          </Link>
        </div>
        <br/>
      {/* </div> */}
    </>
  )
}

export default SearchCard;