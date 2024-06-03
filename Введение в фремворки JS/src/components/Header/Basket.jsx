import React, { useEffect } from "react";
import styles from "./Basket.module.css";
import logo from "../../img/basket.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Компонент корзина из хедера отображает кол-во товаров в корзине

export default function Basket() {
  const myData = useSelector((state) => state.cart.cartItems);

  let count = myData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  useEffect(() => {
    // Здесь вы можете выполнять любые действия в ответ на обновление хранилища
  }, [myData]); // Подписываемся на изменения myData

  return (
    <nav className={styles.basket}>
      <Link to="ShoppingCart">
        {myData.length !== 0 ? (
          <div className={styles.count_div}>
            <p className={styles.count}>{count}</p>
          </div>
        ) : (
          ""
        )}
        <img src={logo} alt="Logo"></img>
      </Link>
    </nav>
  );
}
