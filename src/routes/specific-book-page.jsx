import { useParams } from "react-router-dom";
import { BookInformationBlock } from "../components/specific-book/book-information-block";
// import { BookPriceBlock } from "../components/specific-book/book-price-block";
// import { BookDescriptionBlock } from "../components/specific-book/book-description-block";
import "../components/specific-book/specific-book.css";
import { useFetch } from "../hooks/use-fetch";
// import URL from "../constants/books.json";

export function SpecificBookPage() {
  // const URL = "/books.json";

  const { id } = useParams();

  const { data: books, loading, error } = useFetch("/books.json");
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <BookInformationBlock book={books[id - 1]} />
    </>
  );
}
