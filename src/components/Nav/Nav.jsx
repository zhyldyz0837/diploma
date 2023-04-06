import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav(){
  return (
    <nav classNAme="Nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}