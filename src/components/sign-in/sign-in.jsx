import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import { useBooks } from "../../hooks";
import avatar from "../../images/avatar.png";
import "../../containers/app.css";

export function SignIn() {
  const { userName, setUserName } = useBooks();

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
      <img className="avatar-signin" src={avatar} alt="Avatar" />
      <form className="form-signin" action="/" method="post">
        <div>
          <label className="user-name" htmlFor="username">
            Username
          </label>
          <br />
          <input
            className="input-signin"
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
          <button
            className="btn-signin"
            type="submit"
            onClick={handleButtonClick}
            disabled={userName.length < 4}
          >
            Sign-In
          </button>
        </Link>
      </form>
    </>
  );
}
