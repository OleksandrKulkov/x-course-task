import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import { useBooks } from "../hooks";
// import { Form } from "../components/form";
import { BookContainer } from "../components/book-container";
import { SignIn } from "../components/sign-in";
import "../styles/main.scss";

export function BookListPage() {
  const { books, userLogged } = useBooks();

  const [searchParams, setSearchParams] = useSearchParams();

  const bookQuery = searchParams.get("book") || "";

  const [search, setSearch] = useState(bookQuery);

  const options = [
    { value: "", label: "All books" },
    { value: " && book.price < 15", label: "up to $15" },
    { value: " && book.price >=15 && book.price < 30", label: "$15 to $30" },
    { value: " && book.price > 30", label: "above $30" },
  ];

  const [optionPrice, setOptionPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    setSearchParams({ book: query });
  };

  const handleOptionSubmit = (selectedOption) => {
    setSearchParams(selectedOption);
    setOptionPrice(selectedOption.value);
  };

  const mySearchParams = (book, query, queryPrice) => {
    if (query !== "" && queryPrice === "") {
      return book.title.toLowerCase().includes(query.toLowerCase());
    } else if (query !== "" && queryPrice === 1) {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.price < 15
      );
    } else if (query !== "" && queryPrice === 2) {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.price >= 15 &&
        book.price < 30
      );
    } else if (query !== "" && queryPrice === 3) {
      return (
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.price >= 30
      );
    } else if (query === "" && queryPrice === 1) {
      return book.price < 15;
    } else if (query === "" && queryPrice === 2) {
      return book.price >= 15 && book.price < 30;
    } else if (query === "" && queryPrice === 3) {
      return book.price >= 30;
    } else {
      return book;
    }
  };

  console.log(optionPrice);

  if (userLogged) {
    return (
      <div className="book-list">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            id="search"
            type="search"
            name="search"
            placeholder="Search by book name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Search" />
          <Select
            className="search-box"
            options={options}
            onChange={handleOptionSubmit}
            placeholder="Price"
            isClearable={true}
            isSearchable={false}
          />
        </form>
        <div className="book-container">
          {books
            .filter((book) => book.title.toLowerCase().includes(bookQuery))
            .map((book) => (
              <BookContainer book={book} key={book.id} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <SignIn />
        <h4 className="sign-in-please">
          Sorry, but you need to sign in firstly.
        </h4>
      </>
    );
  }
}
