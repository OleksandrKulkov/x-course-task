import { Link } from "react-router-dom";
import cn from "classnames";
import { useBooks } from "../../hooks";
import cart from "../../images/cart.svg";
import avatar from "../../images/avatar.png";
import "../../containers/app.css";

export const Header = () => {
  const { userName, setUserName } = useBooks();

  return (
    <header className="header">
      <div className="header-logo-block">
        <h3 className="logo-name">
          JS BAND STORE /{" "}
          <span className="logo-owner-name">Oleksandr Kulkov</span>
        </h3>
      </div>
      <div
        className={cn("shopping-block-none", {
          "shopping-block": userName.length > 3,
        })}
      >
        <img className="shopping-cart" src={cart} alt="Shopping cart" />
        <Link to="/">
          <button
            className="button-sign-out"
            type="reset"
            onClick={() => setUserName("")}
          >
            Sign-Out
          </button>
        </Link>
        <img className="user-avatar" src={avatar} alt="User avatar" />
        <h3 className="username">{userName}</h3>
      </div>
    </header>
  );
};
