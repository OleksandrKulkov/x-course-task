import ImageNotFound from "../../../images/ImageNotFound.png";

export function BookInformationBlock({ book }) {
  return (
    <section className="specific-book-information">
      <div className="specific-book-image">
        <img
          src={book?.image ? book?.image : ImageNotFound}
          alt={book?.title}
        />
      </div>
      <div className="specific-book-about">
        <h1 className="specific-book-title">"{book?.title}"</h1>
        <h3 className="specific-book-author">
          <strong>{book?.author}</strong>
        </h3>
        <p className="specific-book-level">
          <strong>Level: advanced</strong>
        </p>
        <p className="specific-book-tags">
          <strong>Tags: {book?.tags}</strong>
        </p>
      </div>
    </section>
  );
}
