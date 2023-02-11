import { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

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

  const handleBookQuantityIncrement = () => {
    setBookQuantity(bookQuantity + 1);
  };

  const handleBookQuantityDecrement = () => {
    setBookQuantity(bookQuantity - 1);
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" && e.preventDefault();
  };

  let totalPrice = (book?.price * bookQuantity).toFixed(2);

  return (
    <section className="specific-book-order">
      <div className="specific-book-order-price-block">
        <div className="specific-book-order-price">
          <p className="p-price">
            <strong>Price:</strong>
            <span id="single-price" className="price">
              ${book?.price}
            </span>
          </p>
        </div>
        <form
          id="order-form"
          className="specific-book-order-form"
          action="/send-quantity"
          method=""
        >
          <label htmlFor="quantity">Quantity: </label>
          <div className="specific-book-order-form-input">
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
            <div className="specific-book-order-form-input-buttons">
              <button
                type="button"
                className="specific-book-order-form-input-buttons-increment"
                onClick={handleBookQuantityIncrement}
                disabled={bookQuantity > 41}
              >
                <FaCaretUp />
              </button>
              <button
                type="button"
                className="specific-book-order-form-input-buttons-decrement"
                onClick={handleBookQuantityDecrement}
                disabled={bookQuantity < 2}
              >
                <FaCaretDown />
              </button>
            </div>
          </div>
        </form>
        <div className="specific-book-order-total-price">
          <p>
            <strong>Total price:</strong>
            <span id="total-price" className="price">
              ${totalPrice}
            </span>
          </p>
        </div>
      </div>
      <button className="specific-book-order-button-submit" type="submit">
        Add to cart
      </button>
    </section>
  );
}
