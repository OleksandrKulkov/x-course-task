// import ImageNotFound from "../../../images/imageNotFound.svg";

export function BookInformationBlock({ book }) {
  return (
    <section className="book-content">
      <div className="book-image">
        <img
          alt={book?.title}
          src={book?.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/imageNotFound.svg";
          }}
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
