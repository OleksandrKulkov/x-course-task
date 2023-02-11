export function BookDescriptionBlock({ book }) {
  return (
    <section className="specific-book-description">
      <h3>Book description:</h3>
      <p>{book?.description}</p>
    </section>
  );
}
