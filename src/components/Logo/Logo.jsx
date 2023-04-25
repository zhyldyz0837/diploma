import "./Logo.css";
import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img id="navlink" src={logo} alt="Website logo" />
      </NavLink>
    </div>
  );
}
