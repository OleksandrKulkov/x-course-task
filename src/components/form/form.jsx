import search24px from "../../images/search24px.png";

export function Form() {
  return (
    <form className="search-form" action="">
      <div className="search-box">
        <div className="container-1">
          <input id="search" placeholder="Search by book name" type="search" />
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
