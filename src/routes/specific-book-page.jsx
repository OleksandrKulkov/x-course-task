import { useParams } from "react-router-dom";
import { useBooks } from "../hooks";
import { SignIn } from "../components/sign-in";
import { BookInformationBlock } from "../components/specific-book/book-information-block";
import { BookPriceBlock } from "../components/specific-book/book-price-block";
import { BookDescriptionBlock } from "../components/specific-book/book-description-block";
import "../styles/main.scss";

export function SpecificBookPage() {
  const { id } = useParams();

  const { books, userLogged } = useBooks();

  if (userLogged) {
    return (
      <div className="specific-book">
        <div className="specific-book-content">
          <BookInformationBlock book={books[id - 1]} />
          <BookPriceBlock book={books[id - 1]} />
        </div>
        <BookDescriptionBlock book={books[id - 1]} />
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
