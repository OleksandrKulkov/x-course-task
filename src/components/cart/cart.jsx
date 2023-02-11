import cart from "../../images/cart.svg";

export function Cart() {
  return (
    <section className="cart">
      <div className="cart-empty">
        <img src={cart} alt="cart" />
        <h1>Your cart is empty now</h1>
      </div>
    </section>
  );
}
