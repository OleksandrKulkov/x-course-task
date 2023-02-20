import { useBooks } from "../../hooks";
import { OrderedBook } from "../ordered-book/ordered-book";
import cart from "../../images/cart.svg";

export function Cart({ orders }) {
  const { sumPrice, setClearOrders } = useBooks();

  const handleSubmitButton = () => {
    setClearOrders(true);
  };

  if (orders.length !== 0) {
    return (
      <section className="cart">
        <div className="cart-btn-block">
          <button
            className="cart-btn-block-btn"
            type="submit"
            onClick={handleSubmitButton}
          >
            Purchase
          </button>
        </div>
        {orders.map((order) => (
          <OrderedBook order={order} key={order.id} />
        ))}
        <div className="order-sum">
          <p className="order-sum-block">
            Total price: $<span>{sumPrice}</span>
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <div className="cart-btn-block">
          <button className="cart-btn">Purchase</button>
        </div>
        <img className="cart-img" src={cart} alt="cart" />
        <h1 className="cart-title">Your cart is empty now</h1>
      </section>
    );
  }
}
