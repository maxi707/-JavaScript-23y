import { useLocation } from "react-router-dom";
import ShowProducts from "../components/ShowProducts/ShowProducts";
import styles from "./Products.module.css";

// Компонент для отображения товаров при переходе из разделка категории
// Получает номер и название категории и отображает название на странице

const Products = () => {
  const location = useLocation();
  const [catId, catTitle] = location.search.slice(1).split("&");

  let checkcatTitle = catTitle.replace(/%20/g, " ");

  return (
    <>
      <div className={styles.prod}>
        <h1>{checkcatTitle}</h1>
      </div>
      <ShowProducts catid={catId}></ShowProducts>
    </>
  );
};

export { Products };
