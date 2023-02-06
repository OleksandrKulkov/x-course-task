import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../services/localStorage";
import { BooksProvider } from "../hooks";
import { useFetch } from "../hooks/use-fetch";
import {
  Layout,
  SignInPage,
  BookListPage,
  SpecificBookPage,
  NotFoundPage,
} from "../routes";
import "./app.css";

export function App() {
  // const URL = "/books.json";

  // const [books, setBooks] = useState([]);

  const [userName, setUserName] = useState(
    LocalStorageService.get(LS_KEYS.USERNAME)
  );

  const [userLogged, setUserLogged] = useState(
    LocalStorageService.get(LS_KEYS.USERLOGGED)
  );

  const { id } = useParams();

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERNAME, userName),
    [userName]
  );

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERLOGGED, userLogged),
    [userLogged]
  );

  const { data: books, loading, error } = useFetch("/books.json");
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <BooksProvider
      value={{
        books,
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
            <Route path="booklist" element={<BookListPage />} />
            <Route
              path="booklist/book/:id"
              element={<SpecificBookPage book={books[id]} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
}
