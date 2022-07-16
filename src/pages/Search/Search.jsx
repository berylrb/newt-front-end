import styles from './Search.module.css'

import SearchForm from "./SearchForm/SearchForm"
// import { useState } from "react"
import { activitySearch } from "../../services/bored-api"

const Search = () => {
  // const [activityTypes, setActivityTypes] = useState([])


  const handleTypeSearch = async formData => {
    const typeResults = await activitySearch(formData)
    console.log(typeResults)
    // setActivityTypes(typeResults.results)
  }

  return (
    <>
      <div className={styles.searchBg}>
          <div className={styles.searchHeader}>
            <h1 className={styles.searchH1}>ACTIVITY SEARCH</h1>
          </div>
          <SearchForm handleTypeSearch={handleTypeSearch} />
      </div>
    </>
  )
}

export default Search