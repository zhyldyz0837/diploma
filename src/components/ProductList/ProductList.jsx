import "./ProductList.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter((product) => product.category === category.id)
    .map((product) => (
      <div className="Product" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.path}>{product.name}</Link>
        <span>{product.price} $ </span>
        <AddToCart product={product} />
      </div>
    ));

  return <div className="ProductList">{output}</div>;
}
