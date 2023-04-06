import { NavLink, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"; 

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
          <Route path="/contact" element={<h2>Contact</h2>} />
        </Routes>
      </Layout>
      <main></main>
    </div>
  );
}
