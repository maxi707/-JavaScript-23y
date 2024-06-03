import React from 'react';
import styles from './ProdCounter.module.css'

const ProdCounter = ({quantity, setQuantity}) => {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.count}>
        <button className={styles.button} onClick={decrementQuantity}>
          -
        </button>
        {quantity}
        <button className={styles.button} onClick={incrementQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProdCounter;