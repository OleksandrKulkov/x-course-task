import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../services/localStorage";
import { BooksProvider } from "../hooks";
import {
  Layout,
  SignInPage,
  BookListPage,
  SpecificBookPage,
  NotFoundPage,
} from "../routes";
import "./app.css";

export function App() {
  const URL = "books.json";

  const [books, setBooks] = useState([]);

  const [userName, setUserName] = useState(
    LocalStorageService.get(LS_KEYS.USERNAME)
  );

  const [userLogged, setUserLogged] = useState(
    LocalStorageService.get(LS_KEYS.USERLOGGED)
  );

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERNAME, userName),
    [userName]
  );

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERLOGGED, userLogged),
    [userLogged]
  );

  async function fetchBooksJSON() {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(URL)
      .then((response) => response.json())
      .then((books) => setBooks(books.books))
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchBooksJSON();
  }, []);

  return (
    <BooksProvider
      value={{
        books,
        setBooks: (b) => setBooks(b),
        userName,
        setUserName: (u) => setUserName(u),
        userLogged,
        setUserLogged: (l) => setUserLogged(l),
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<SignInPage />} />
            <Route path="/bookList" element={<BookListPage />} />
            <Route
              path="/specificBook/:bookID"
              element={<SpecificBookPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
}
