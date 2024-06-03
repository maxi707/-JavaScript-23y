import styles from "./ButtonForAll.module.css";
import { Link } from "react-router-dom";

export default function ButtonCheckout(props) {
    return (
        <>
        <Link to={props.link}>
        <button className={styles.button}>{props.text}</button>
        </Link>
        </>
    );
  }