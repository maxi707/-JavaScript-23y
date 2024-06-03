import ButtonForAll from "../components/Buttons/ButtonForAll";
import styles from "./NotFound.module.css";
import num from "../img/4.png";
import cactus from "../img/404.svg";

const NotFound = () => {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <div>
          <img src={num} alt="4"></img> <img src={cactus} alt="0"></img>
          <img src={num} alt="4"></img>
        </div>
      </div>
      <h1>Page Not Found</h1>
      <p className={styles.p}>
        We’re sorry, the page you requested could not be found.<br></br>
        Please go back to the homepage.
      </p>
      <ButtonForAll text="Go home" link="/"></ButtonForAll>
    </div>
  );
};

export { NotFound };
