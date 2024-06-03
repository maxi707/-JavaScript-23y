import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sales.module.css";

export default function Sales() {
  const [sales, setSales] = useState([]);
  const backend = "http://localhost:3333";

  useEffect(() => {
    const fetchSales = async () => {
      const response = await fetch(backend + "/products/all");
      const data = await response.json();
      setSales(data);
    };
    fetchSales();
  }, []);

  const salesfiltered = sales.filter((sale) => sale.discont_price != null);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const saleId = getRandomInt(salesfiltered.length - 4);
  
  function percent(newprice, oldprice){
    
    return ((Math.abs(oldprice-newprice))/oldprice*100)
  }
  return (
    <>
      <div className={styles.categoriesDiv}>
        <h1>Sale</h1>
        <div className={styles.line}></div>
        <Link to="/AllSales">
          <button className={styles.button}>All sales</button>
        </Link>
      </div>
      <div className={styles.content}>
        {salesfiltered.slice(saleId, saleId + 4).map((sale) => (
          <div className={styles.cards} key={sale.id}>
            <Link to="/AllSales">
                <div className={styles.percent}>{"-"+Math.round(percent(sale.price,sale.discont_price))+'%'}</div>
              <img
                className={styles.img}
                src={backend + sale.image}
                alt={sale.title}
              ></img>

              <p>{sale.title.length < 25 ? sale.title : sale.title.slice(0,15)+"..."}</p>
              <div className={styles.prices}>
                <div className={styles.price}>${sale.discont_price}</div>
                <div className={styles.oldprice}>{sale.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
