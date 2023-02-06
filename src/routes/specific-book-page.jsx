import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/use-fetch";
import { BookInformationBlock } from "../components/specific-book/book-information-block";
import { BookPriceBlock } from "../components/specific-book/book-price-block";
import { BookDescriptionBlock } from "../components/specific-book/book-description-block";
import "../components/specific-book/specific-book.css";

export function SpecificBookPage() {
  const { id } = useParams();

  const { data: books, loading, error } = useFetch("/books.json");
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div className="book-content">
        <BookInformationBlock book={books[id - 1]} />
        <BookPriceBlock book={books[id - 1]} />
      </div>
      <BookDescriptionBlock book={books[id - 1]} />
    </>
  );
}
