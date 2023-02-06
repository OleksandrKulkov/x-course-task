import ImageNotFound from "../../../images/image-not-found.jpg";

export function BookInformationBlock({ book }) {
  return (
    <section className="book-content">
      <div className="book-image">
        <img
          src={book ? book?.image : ImageNotFound}
          alt={book?.title}
          // onError={(e) => {
          //   e.target.onerror = null;
          //   e.target.src = { ImageNotFound };
          // }}
        />
      </div>
      <div className="book-information">
        <h1>{book?.title}</h1>
        <p>
          <strong>Book author: </strong>
          {book?.author}
        </p>
        <p>
          <strong>Book level: </strong>
          {book?.level}
        </p>
        <p>
          <strong>Book tags: </strong>
          {book?.tags}
        </p>
      </div>
    </section>
  );
}
