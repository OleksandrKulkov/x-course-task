import { useEffect, useState } from "react";
import ky from "ky";

export function useKy(url) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getAllBooks() {
      try {
        const books = await ky.get(url).json();
      } catch (err) {
        console.log(err.message);
      }
    }

    fetch(url)
      .then((response) => response.json())
      .then((books) => setBooks(books.books))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { books, loading, error };
}
