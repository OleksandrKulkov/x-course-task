import { useBooks } from "../hooks";
import { Form } from "../components/form";
import { BookContainer } from "../components/book-container";
import { SignIn } from "../components/sign-in";
import "../styles/main.scss";

export function BookListPage() {
  const { books, userLogged } = useBooks();

  if (userLogged) {
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
