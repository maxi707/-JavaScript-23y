import styles from "./ShoppingCart.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import ButtonCheckout from "../Buttons/ButtonForAll";
import OrderForm from "./OrderForm";
import ItemDel from "./ItemDel";

export default function ShoppingCart() {
  const myData = useSelector((state) => state.cart.cartItems);
  const backend = "http://localhost:3333";

  useEffect(() => {
    // console.log("Basket updated:", myData);
  }, [myData]); // Подписываемся на изменения myData
  // console.log(myData);

  // Сумма товаров в корзине
  const total = myData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
  }, 0);
  let count = myData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  // console.log(total); // Выведет: 60
  if (myData.length !== 0)
    return (
      <>
        <div></div>
        <div className={styles.title}>
          <h1>Shopping cart</h1>
          <div className={styles.line}></div>
          <Link to="/">
            <button className={styles.button}>Back to the store</button>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.listItems}>
            {myData.map((good) => (
              <div className={styles.cartItem} key={good.id}>
                <img
                  className={styles.goodImage}
                  src={backend + good.data.image}
                  alt={good.data.title}
                ></img>
                <div className={styles.itemContent}>
                  <p>
                    {good.data.title.length < 25 
                      ? good.data.title
                      : good.data.title.slice(0, 24) + "..."}
                  </p>
                  <ItemDel className={styles.ItemDel} id = {good}></ItemDel>
                  <div className={styles.price}>
                    <Counter id={good.data.id}></Counter>
                    {good.data.discont_price != null ? (
                      <>
                        <h2>${(good.data.discont_price * good.quantity).toFixed(2)}</h2>
                        <p>${(good.data.price * good.quantity).toFixed(2)}</p>
                      </>
                    ) : (
                      <h2>{(good.data.price*good.quantity).toFixed(2)}</h2>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.orderDetails}>
            <div className={styles.orderTxt}>
              <h2>Order details</h2>
              <p>{count} items</p>
              <div className={styles.total}>
                <p>Total</p>
                <h1>${total.toFixed(2)}</h1>
              </div>
            </div>
            <div className={styles.orderForm}>
              <OrderForm></OrderForm>
            </div>
          </div>
        </div>
      </>
    );
  else return (
  <div className={styles.empty}>
    <h1>Shopping cart</h1>
    <p>Looks like you have no items in your basket currently.</p>
    <ButtonCheckout text="Continue Shopping" link="/"></ButtonCheckout>
    </div>
    )
}
