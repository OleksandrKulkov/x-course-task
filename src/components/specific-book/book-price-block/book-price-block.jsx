import { useState } from "react";

export function BookPriceBlock({ book }) {
  const [bookQuantity, setBookQuantity] = useState(1);

  const handleBookQuantity = ({ target: { value } }) => {
    if (value < 1) {
      setBookQuantity(1);
    } else if (value > 42) {
      setBookQuantity(42);
    } else {
      setBookQuantity(value);
    }
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" && e.preventDefault();
  };

  let totalPrice = (book?.price * bookQuantity).toFixed(2);

  return (
    <section className="book-order">
      <div className="price-block">
        <div className="book-price">
          <p className="p-price">
            <strong>Price:</strong>
            <span id="single-price" className="price">
              ${book?.price}
            </span>
          </p>
        </div>
        <form
          id="order-form"
          className="order-form"
          action="/send-quantity"
          method=""
        >
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={bookQuantity}
            onChange={handleBookQuantity}
            onKeyDown={handleKeyDown}
            min="1"
            max="42"
          />
        </form>
        <div className="book-total-price">
          <p>
            <strong>Total price:</strong>
            <span id="total-price" className="price">
              ${totalPrice}
            </span>
          </p>
        </div>
      </div>
      <button className="button-order-submit" type="submit">
        Add to cart
      </button>
    </section>
  );
}
