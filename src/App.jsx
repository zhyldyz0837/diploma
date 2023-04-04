import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is my diploma</p>
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
      </nav>
    </div>
  );
}