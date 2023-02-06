import { Link } from "react-router-dom";
import "../../containers/app.css";

export function BookContainer({ book }) {
  return (
    <section className="book">
      <div className="book-block">
        <img
          className="book-cover"
          alt={book.title}
          src={book.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "image-not-found.jpg";
          }}
        />
        <div className="book-summary">
          <p className="book-title">
            <strong>{book.title}</strong>
          </p>
          <p className="book-author">{book.author}</p>
        </div>
      </div>
      <div className="book-actions-block">
        <div>
          <p className="book-price">${book.price}</p>
        </div>
        <Link to={`/booklist/book/${book.id}`} key={book.id}>
          <button className="view-button">View</button>
        </Link>
      </div>
    </section>
  );
}
