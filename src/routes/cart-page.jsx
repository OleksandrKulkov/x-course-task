import { Cart } from "../components/cart";
import { SignIn } from "../components/sign-in";
import { useBooks } from "../hooks";
import "../styles/main.scss";

export function CartPage() {
  const { orders, userLogged } = useBooks();

  if (userLogged) {
    return <Cart orders={orders.orders} />;
  } else {
    return (
      <>
        <SignIn />
        <h4 className="sign-in-please">
          Sorry, but you need to sign in firstly.
        </h4>
      </>
    );
  }
}
