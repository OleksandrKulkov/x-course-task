import { Link } from "react-router-dom";
import "../../styles/main.scss";

export function BookContainer({ book }) {
  return (
    <section className="book-block">
      <div className="book-block-cover">
        <img
          alt={book?.title}
          src={book?.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/ImageNotFound.png";
          }}
        />
      </div>
      <div className="book-block-summary">
        <p className="book-block-title">
          <strong>
            "
            {book?.title.length > 24
              ? book?.title.slice(0, 24) + "..."
              : book?.title}
            "
          </strong>
        </p>
        <p className="book-block-author">{book?.author}</p>
      </div>
      <div className="book-block-actions">
        <div className="book-block-actions-price">
          <p>${book?.price}</p>
        </div>
        <Link to={`/booklist/book/${book?.id}`} key={book?.id}>
          <button className="view-btn">View</button>
        </Link>
      </div>
    </section>
  );
}
