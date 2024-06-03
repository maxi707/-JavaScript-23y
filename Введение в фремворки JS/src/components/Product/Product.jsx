import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonAdd from "../Buttons/ButtonAdd";
import styles from "./Product.module.css";
import ProdCounter from "./ProdCounter";

export default function Product(props) {
  const location = useLocation();
  const Id = location.search.slice(1);
  const [goods, setProduct] = useState([]);
  const backend = "http://localhost:3333";
  let [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(backend + "/products/" + Id);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      {goods.map((good) => (
        <div className={styles.content}>
          <div
            style={{ backgroundImage: `url(${backend + good.image})` }}
            className={styles.imageprod}
          ></div>
          <div className={styles.product}>
            <p className={styles.title}>
              {good.title.length > 25
                ? good.title.slice(0, 20) + "..."
                : good.title}
            </p>
            <div className={styles.price}>
              <h1>
                $
                {good.discont_price != null
                  ? (good.discont_price * quantity).toFixed(2)
                  : (good.price * quantity).toFixed(2)}
              </h1>
              <p className={styles.discont_price}>
                {good.discont_price != null
                  ? (good.price * quantity).toFixed(2)
                  : ""}
              </p>
            </div>

            <div className={styles.add}>
              <ProdCounter
                quantity={quantity}
                setQuantity={setQuantity}
              ></ProdCounter>
              <div>
                <ButtonAdd
                  count={quantity}
                  id={good}
                  text="Add to card"
                ></ButtonAdd>
              </div>
            </div>
            <div className={styles.description}>
              <h2>Description</h2>
              {good.description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
