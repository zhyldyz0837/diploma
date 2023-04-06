import "./Layout.css";
import Nav from "../Nav/Nav";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav></Nav>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}
