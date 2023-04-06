import "./Layout.css";
import Nav from "../Nav/Nav";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav></Nav>
      </header>
      <aside>
        ASIDE
      </aside>
      <main>
        {props.children}
      </main>
      <footer>
        FOOTER
      </footer>
     
    </div>
  );
}
