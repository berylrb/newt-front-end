import styles from './Search.module.css'

import SearchForm from "./SearchForm/SearchForm"
import SearchCard from './SearchCard/SearchCard'
import { useState } from 'react'

import { activitySearch } from "../../services/bored-api"


const Search = () => {
  const [searchDetails, setSearchDetails] = useState([])

  console.log('search key', searchDetails.key)

  const handleTypeSearch = async formData => {
    const typeResults = await activitySearch(formData)
    console.log(typeResults)
    setSearchDetails(typeResults)
    console.log('the search details', searchDetails)
    console.log('this is the type', typeof searchDetails)
  }


  return (
    <>
      <div className={styles.searchBg}>
          <div className={styles.searchHeader}>
            <h1 className={styles.searchH1}>ACTIVITY SEARCH</h1>
          </div>
          <SearchForm handleTypeSearch={handleTypeSearch} />
      </div>
        <SearchCard
          search={searchDetails}
          key={searchDetails.key}
        />
      {searchDetails.activity}
      
        
      

    </>
  )
}

export default Search