import ImageNotFound from "../../../images/image-not-found.jpg";

export function BookInformationBlock({ book }) {
  return (
    <section className="book-content">
      <div className="book-image">
        <img
          src={book?.image ? book?.image : ImageNotFound}
          alt={book?.title}
        />
      </div>
      <div className="book-information">
        <h1>"{book?.title}"</h1>
        <p>
          <strong>{book?.author}</strong>
        </p>
        <p>
          <strong>advanced level</strong>
        </p>
        <p>
          <strong>{book?.tags}</strong>
        </p>
      </div>
    </section>
  );
}
