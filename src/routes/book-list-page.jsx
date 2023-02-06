import { useBooks } from "../hooks";
import { Form } from "../components/form";
import { BookContainer } from "../components/book-container";
import "../containers/app.css";

export function BookListPage() {
  const { books } = useBooks();

  return (
    <div className="book-list">
      <Form />
      <div className="book-container">
        {books.map((book) => (
          <BookContainer book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
