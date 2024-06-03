import styles from "./OrderForm.module.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import store from "../../store/store";
import { useRef } from "react";

import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartActions";
import OrderConfirm from "./Order_confirm";


export default function OrderForm() {
  const buttonRef = useRef(null); // Ссылка на кнопку
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    handleClearCart();
  };

  const cart = store.getState();

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault()
    console.log(cart);
    try {
      setShowModal(true);
      const response = await fetch("http://localhost:3333/order/send  ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data + cart),
      });

      if (response.ok) {
        setShowModal(true);
        buttonRef.current.innerText = "The Order is Placed";
        buttonRef.current.classList.add(styles.sent);

        
        console.log("Запрос успешно отправлен!");
      } else {
        console.error("Ошибка при отправке запроса:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error.message);
    }
  };
  return (
    <>
      {showModal && <OrderConfirm onClose={handleCloseModal} />}
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className={styles.field}
              placeholder={"Name"}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span>
                <br></br>Поле обязательно
              </span>
            )}
          </div>

          <div>
            <input
              className={styles.field}
              placeholder={"Phone number"}
              type="tel"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span>
                <br></br>Поле обязательно
              </span>
            )}
          </div>

          <div>
            <input
              className={styles.field}
              placeholder={"Email"}
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span>
                <br></br>Поле обязательно
              </span>
            )}
          </div>

          <button className={styles.button} ref={buttonRef} type="submit">
            Order
          </button>
        </form>
      </div>
    </>
  );
}
