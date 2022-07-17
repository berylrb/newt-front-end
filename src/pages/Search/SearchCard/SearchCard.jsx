import styles from '../Search.module.css'

import { Link } from 'react-router-dom'

const SearchCard = (props) => {


  return ( 
    <>
      <Link className={styles.activityLink} to={`/activity/${props.search.key}`}>
        {props.search.activity}
      </Link>
      <br/>
    </>
  )
}

export default SearchCard;