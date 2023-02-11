import { useState } from "react";
import search24px from "../../images/search24px.png";
import "../../styles/main.scss";

export function Form() {
  const [search, setSearch] = useState("");

  const handlerSearch = ({ target: { value } }) => {
    setSearch(value);
  };
  return (
    <form className="search-form" action="">
      <div className="search-box">
        <div className="search-container">
          <input
            id="search"
            type="search"
            placeholder="Search by book name"
            onChange={handlerSearch}
          />
          <button className="icon">
            <img src={search24px} alt="search button" />
          </button>
        </div>
      </div>
      <select name="filter" id="filter">
        <option className="options" value="PriceUp">
          Price
        </option>
        <option className="options" value="PriceDown">
          Author
        </option>
        <option className="options" value="NameUp">
          Name
        </option>
      </select>
    </form>
  );
}
