import SearchForm from "../../components/SearchForm/SearchForm"
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
      <div className="landing-bg">
        <main className="search">
          <h1>Search page</h1>
          <SearchForm handleTypeSearch={handleTypeSearch} />
        </main>
      </div>
    </>
  )
}

export default Search