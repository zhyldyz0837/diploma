import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";


export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/delivery" element={<Delivery></Delivery>} />
        </Routes>
      </Layout>
    </div>
  );
}
