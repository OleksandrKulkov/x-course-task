import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import { useBooks } from "../../hooks";
import avatar from "../../images/avatar.png";
import "../../styles/main.scss";

export function SignIn() {
  const { userName, setUserName } = useBooks("");

  const { userLogged, setUserLogged } = useBooks();

  useEffect(
    () => LocalStorageService.set(LS_KEYS.USERLOGGED, userLogged),
    [userLogged]
  );

  const handleUserState = () => {
    setUserName(userName);
  };

  const handleUserNameValueChange = ({ target: { value } }) => {
    setUserName(value.trim());
  };

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      handleUserState();
    }
  };

  const handleButtonClick = () => {
    handleUserState();
    setUserLogged(true);
  };

  return (
    <>
      <div className="signin-avatar-block">
        <img className="signin-avatar" src={avatar} alt="Avatar" />
      </div>
      <form className="signin-form" action="/" method="post">
        <div className="signin-form-block">
          <label htmlFor="username">Username</label>
          <input
            className="signin-input"
            type="text"
            id="name"
            name="username"
            maxLength={16}
            placeholder="type Username (4 to 16 letters)"
            value={userName}
            onChange={handleUserNameValueChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Link to="/booklist">
          <input
            className="signin-btn"
            type="submit"
            value="Sign In"
            onClick={handleButtonClick}
            disabled={userName.length < 4}
          />
        </Link>
      </form>
    </>
  );
}
