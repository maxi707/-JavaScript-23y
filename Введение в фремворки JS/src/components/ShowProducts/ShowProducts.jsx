import React, { useEffect, useState } from "react";
import styles from "./ShowProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShowProducts(props) {
  const [products, setProducts] = useState([]);
  const backend = "http://localhost:3333";

  // Компонент фильтрацции и отображения товара в списке товаров с помощью компонента ProductCard
  // На хход передается свойство catid со страницы категории если это свойство есть то загружаются товары только с указанной категоии
  // Если это свойство не указано то с бекэнда загружается массив всех товаров
  //  и если адрес указан AllSales то этот массив фильтруется по наличию dicont_price 
  // В компонент ProductCard передается объект товара

  useEffect(() => {
    const fetchProducts = async () => {
      const response =
        props.catid === undefined
          ? await fetch(backend + "/products/all")
          : await fetch(backend + "/categories/" + props.catid);
      const data = await response.json();
      
      props.catid === undefined ? setProducts(data) : setProducts(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.content}>
      {props.from === "/AllSales"? (  
       products.filter((product) => product.discont_price != null).map((product) => (
        <ProductCard  product={product} key = {product.id}></ProductCard>)))
        :
        
      products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>))}
  
    </div>
  );
}
