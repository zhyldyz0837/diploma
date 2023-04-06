import "./Nav.css";

export default function Nav(){
  return (
    <nav classNAme="Nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}