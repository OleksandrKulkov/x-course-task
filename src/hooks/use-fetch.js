import { useEffect, useState } from "react";
// import axios from "axios";

export function useFetch(url) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((books) => setBooks(books.books))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // setLoading(true);
    // axios
    //   .get(url)
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [url]);

  return { books, loading, error };
}
