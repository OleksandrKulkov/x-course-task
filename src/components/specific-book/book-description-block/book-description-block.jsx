export function BookDescriptionBlock({ book }) {
  return (
    <section className="book-description">
      <h3 className="h3-description">Book description:</h3>
      <p>{book?.description}</p>
    </section>
  );
}
