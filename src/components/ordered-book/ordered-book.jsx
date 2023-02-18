export function OrderedBook({ order }) {
  return (
    <section className="ordered-book">
      <div className="ordered-book-title">
        <p className="ordered-book-title-title">{order.title}</p>
        <p className="ordered-book-title-author">{order.author}</p>
      </div>
      <div className="ordered-book-quantity">
        <p>{order.quantity}</p>
      </div>
      <div className="ordered-book-total-price">
        <p>{order.totalPrice}</p>
      </div>
    </section>
  );
}
