import ImageNotFound from "../../../images/image-not-found.jpg";

export function BookInformationBlock({ book }) {
  return (
    <section className="book-information">
      <div className="book-image">
        <img
          src={book?.image ? book?.image : ImageNotFound}
          alt={book?.title}
        />
      </div>
      <div className="book-about">
        <h1 className="book-title">"{book?.title}"</h1>
        <h3 className="book-author">
          <strong>{book?.author}</strong>
        </h3>
        <p className="book-level">
          <strong>Level: advanced</strong>
        </p>
        <p className="book-tags">
          <strong>Tags: {book?.tags}</strong>
        </p>
      </div>
    </section>
  );
}
