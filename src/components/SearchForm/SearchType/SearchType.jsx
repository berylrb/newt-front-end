

const SearchType = (props) => {
  <select name="type">
    <option value="">Select Activity Type</option>
    {props.searchParams.type.map((activityType, index) => (
      <option key={index} value={activityType}>{activityType}</option>
    ))}

  </select>
}


export default SearchType