import styles from './Search.module.css'

import SearchForm from "./SearchForm/SearchForm"
import SearchCard from './SearchCard/SearchCard'
import { useState } from 'react'

import { activitySearch } from "../../services/bored-api"


const Search = () => {
  const [searchDetails, setSearchDetails] = useState(null)

  console.log('search key', searchDetails?.key)

  const handleTypeSearch = async formData => {
    const typeResults = await activitySearch(formData)
    console.log('typeresults', typeResults)
    setSearchDetails(typeResults)
    // console.log('the search details', searchDetails)
    // console.log('this is the type', typeof searchDetails)
  }

  

  return (
    <>
      <div className={styles.searchPage}>
        <div className={styles.searchBg}>
          <div className={styles.searchHeader}>
            <h1 className={styles.searchH1}>ACTIVITY SEARCH</h1>
          </div>
            <SearchForm handleTypeSearch={handleTypeSearch} />
          {searchDetails && (
          <div className={styles.resultsContainer}>
            <div className={styles.searchCardDiv}>
              <SearchCard
                search={searchDetails}
                key={searchDetails.key}
              />
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Search