import styles from "./OrderConfirm.module.css";
import ReactDOM from "react-dom";
import React from "react";

const OrderConfirm = ({ onClose }) => {
  console.log("modaaaaaal");

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2>Congratulations!</h2>
          <p>Your order has been successfully placed on the website.</p>
          <span>A manager will contact you shortly to confirm your order.</span>
        </div>
        <button className={styles.close} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default OrderConfirm;
