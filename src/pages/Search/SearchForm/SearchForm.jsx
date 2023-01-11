// import { searchParams } from "../../data/search-data";
import styles from '../Search.module.css'

import { useState } from "react";

const SearchForm = (props) => {
  
  // const [type, setSearchType] = useState(null)
  // const selectedType = props.searchParams[type]
  const [formData, setFormData] = useState({
    type: '',
    participants: '',
    price: '',
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('handle submit')
    props.handleTypeSearch(formData)
  }

  return (
    <div className={styles.searchForm}>
      <form
        autoComplete="off"
        className="search"
        method="GET"
        onSubmit={handleSubmit}
      >
        <div className={styles.searchInputDiv}>
            {/* <label>Type:</label> */}
          <select className={styles.selectType} name="type" id="type" onChange={handleChange} required>
            <option value=''>Type</option>
            <option name="query" value="education">Education</option>
            <option name="recreational" value="recreational">Recreational</option>
            <option name="social" value="social">Social</option>
            <option name="diy" value="diy">DIY</option>
            <option name="charity" value="charity">Charity</option>
            <option name="cooking" value="cooking">Cooking</option>
            <option name="relaxation" value="relaxation">Relaxation</option>
            <option name="music" value="music">Music</option>
            <option name="busywork" value="busywork">BusyWork</option>
          </select>
          {/* <SearchType setSearchType={setSearchType} /> */}
          {/* <label>Participants:</label> */}
          <select className={styles.select} name="participants" id="participants" onChange={handleChange}>
            <option value=''>Participants</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
          {/* <label>Price:</label> */}
          <div className={styles.selectSecondRow}>
            <select className={styles.selectPrice} name="price" id="price"onChange={handleChange}>
              <option value=''>Price</option>
              <option value="free">Free</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
            {/* <button type="submit">Random</button> */}
            <button className={styles.button6} type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;