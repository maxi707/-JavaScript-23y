import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const backend = "http://localhost:3333";

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(backend + "/categories/all");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategory();
  }, []);
  categories.slice(0, 4);


  return (
    <>
      <div className={styles.categoriesDiv} key={categories.id}>
        <h1>Categories</h1>
        <div className={styles.line}></div>
        <Link to="/categories">
          <button className={styles.button}>All categories</button>
        </Link>
      </div>
      <div className={styles.content}>
        {categories.slice(0, props.total).map((category) => (
          <div
            className={styles.cards}
            style={{ width: 100 / props.total + "%" }}
            key={category.id}
          >
            <Link
              to={`/products?${category.id}&${category.title}`}
                
            >
              <img
                className={styles.img}
                style={{ width: props.img_width, height: props.img_width }}
                src={backend + category.image}
                alt={category.title}
              ></img>

              <p>{category.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
