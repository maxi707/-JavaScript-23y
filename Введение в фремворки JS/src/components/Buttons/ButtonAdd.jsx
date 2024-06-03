import styles from "./ButtonAdd.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartActions";

// Модуль кнопки добавления товара в корзину

export default function Button_add(props) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(addToCart(props.id, props.count));


    event.preventDefault();
    event.stopPropagation(); // Предотвращаем распространение события
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        {props.text}
      </button>
    </>
  );
}
