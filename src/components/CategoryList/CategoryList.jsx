import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import categoryCollection from "../../firebase";
import "./CategoryList.css";
import { NavLink } from "react-router-dom";

export default function CategoryList () {
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    getDocs(categoryCollection)
    .then(snapshot => {
      const newCategories =[];

       snapshot.docs.forEach(doc => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
       });

       setCategories(newCategories);
    })
 
  },[]);
  
  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={'/category' + category.path}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>
        {output}
      </ul>
    </div>
  );
}
