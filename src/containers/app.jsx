import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../services/localStorage";
import { BooksProvider } from "../hooks";
import { useFetch } from "../hooks";
import {
  Layout,
  SignInPage,
  BookListPage,
  SpecificBookPage,
  CartPage,
  NotFoundPage,
} from "../routes";
import "../styles/main.scss";

export function App() {
  const URL = "/books.json";

  const [userName, setUserName] = useState(
    LocalStorageService.get(LS_KEYS.USERNAME) || ""
  );

  const [userLogged, setUserLogged] = useState(
    LocalStorageService.get(LS_KEYS.USERLOGGED) || false
  );

  const [orders, setOrders] = useState(
    LocalStorageService.get(LS_KEYS.ORDERS) || {
      orders: [],
    }
  );

  const [sumPrice, setSumPrice] = useState(
    LocalStorageService.get(LS_KEYS.SUMPRICE) || 0
  );

  const [filterValue, setFilterValue] = useState("");

  const { id } = useParams();

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERNAME, userName),
    [userName]
  );

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERLOGGED, userLogged),
    [userLogged]
  );

  useEffect(() => LocalStorageService.set(LS_KEYS.ORDERS, orders), [orders]);

  useEffect(
    () => LocalStorageService.set(LS_KEYS.SUMPRICE, sumPrice),
    [sumPrice]
  );

  const { books, loading, error } = useFetch(URL);
  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log(error);
    return null;
  }

  return (
    <BooksProvider
      value={{
        books,
        userName,
        setUserName: (u) => setUserName(u),
        userLogged,
        setUserLogged: (l) => setUserLogged(l),
        orders,
        setOrders: (o) => setOrders(o),
        filterValue,
        setFilterValue: (b) => setFilterValue(b),
        sumPrice,
        setSumPrice: (s) => setSumPrice(s),
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
            <Route path="booklist/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  );
}
