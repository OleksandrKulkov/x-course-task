import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import cn from "classnames";
import { useBooks } from "../../hooks";
import cart from "../../images/cart.svg";
import avatar from "../../images/avatar.png";
import "../../containers/app.css";

export const Header = () => {
  const { userName, setUserName, userLogged, setUserLogged } = useBooks();

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERLOGGED, userLogged),
    [userLogged]
  );

  const handleUserState = () => {
    setUserName("");
    setUserLogged(false);
  };

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
          "shopping-block": userLogged,
        })}
      >
        <img className="shopping-cart" src={cart} alt="Shopping cart" />
        <Link to="/">
          <button
            className="button-sign-out"
            type="reset"
            onClick={handleUserState}
          >
            Sign out
          </button>
        </Link>
        <img className="user-avatar" src={avatar} alt="User avatar" />
        <h3 className="username">{userName}</h3>
      </div>
    </header>
  );
};
