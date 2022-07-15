import { searchParams } from "../../data/search-data";

const SearchForm = (props) => {
  return (
    <form
      autoComplete="off"
      className="search"
      method="GET"
    >
      <div>
          <label>Type:</label>
        <select name="type" id="type">
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">BusyWork</option>
        </select>
        <label>Accessability:</label>
        <select name="accessibility" id="access">
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
        <label>Participants:</label>
        <select name="participants" id="participants">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6+">6+</option>
        </select>
        <label>Price:</label>
        <select name="price" id="price">
          <option value="0">Free</option>
          <option value="1">$</option>
        </select>
        <button type="submit">Random</button>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;