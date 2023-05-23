import { useContext } from "react";
import "./Auth.css";
import { AppContext } from "../../App";
import { logIn, logOut } from "../../firebase";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  // показывается гостю
  let output = (
    <span>
      Guest <button className="sing-btn" onClick={logIn}>Sign in</button>
    </span>
  );
  // показывается пользователю
  if (user) {
    output = (
      
      <span>
      <div className="sing">
        <button className="sing-btn" onClick={logOut}>Sign out</button>  <Link to="/orders">{user.displayName}</Link></div>

      </span>
    );
  }

  return <div className="Auth">{output}</div>;
}
