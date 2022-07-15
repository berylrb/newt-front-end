

const SearchForm = () => {
  return (
    <form
      autoComplete="off"
      className="search"
      method="POST"
    >
      <div>
        <label></label>
        <select name="" id="">
          <option value="0.0">0</option>
          <option value="0.1">1</option>
          <option value="0.2">2</option>
          <option value="0.3">3</option>
          <option value="0.4">4</option>
          <option value="0.5">5</option>
          <option value="0.6">6</option>
          <option value="0.7">7</option>
          <option value="0.8">8</option>
          <option value="0.9">9</option>
          <option value="1.0">10</option>
        </select>
      </div>
    </form>
  );
}

export default SearchForm;