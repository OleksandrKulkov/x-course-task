import { useState } from "react";
import { useBooks } from "../hooks";
import { BookContainer } from "../components/book-container";
import { SignIn } from "../components/sign-in";
import Select from "react-select";
import "../styles/main.scss";

export function BookListPage() {
  const { books, userLogged } = useBooks();

  const [query, setQuery] = useState("");
  const [queryPrice, setQueryPrice] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const options = [
    {
      value: "",
      label: "All books",
    },
    {
      value: 1,
      label: "Up to $15",
    },
    {
      value: 2,
      label: "$15 to $30",
    },
    {
      value: 3,
      label: "Above $30",
    },
  ];

  const handleChange = (selectedOptions) => {
    setQueryPrice(selectedOptions.value);
  };

  if (userLogged) {
    return (
      <div className="book-list">
        <form className="search-form">
          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search by book name..."
            />
            <Select
              className=".select"
              options={options}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
        </form>
        <div className="book-container">
          {books
            .filter((book) => {
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
            })
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
