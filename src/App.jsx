import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import { createContext, useEffect, useState } from "react";
import { categoryCollection } from "./firebase";
import { getDocs } from "firebase/firestore";
import Category from "./pages/Category";

export const AppContext = createContext({
  categories: [],
});

export default function App() {
  const [categories, setCategories] = useState([]);
  // выполнить эту функцию только один раз
  useEffect(() => {
    // получить категории из списка категорий
    getDocs(categoryCollection).then((snapshot) => {
      // категории будут храниться в snapshot.docs

      // создать массив для категорий
      const newCategories = [];
      // заполнить массив данными из списка категорий
      snapshot.docs.forEach((doc) => {
        // doc = категория
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      // задать новый массив как состояние комапо
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="App">
      <AppContext.Provider value={{ categories }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
