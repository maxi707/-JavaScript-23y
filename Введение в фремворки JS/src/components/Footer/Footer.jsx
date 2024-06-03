import React from "react";
import styles from "./Footer.module.css";
import insta from "../../img/ic-instagram.svg";
import whatsapp from "../../img/ic-whatsapp.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h1>Contact</h1>
      <div className={styles.contacts}>
        <div className={styles.card}>
          <h4>Phone</h4>
          <h2>+7 (499) 350-66-04</h2>
        </div>
        <div className={styles.card}>
          <h4>Socials</h4>
          <a href="www.vk.com">
            <img src={insta} alt="instalogo"></img>
          </a>
          <a href="web.whatsapp.com">
            <img src={whatsapp} alt="whatsapplogo"></img>
          </a>
        </div>
        <div className={styles.card}>
          <h4>Address</h4>
          <h2>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h2>
        </div>
        <div className={styles.card}>
          <h4>Working Hours</h4>
          <h2>24 hours a day</h2>
        </div>
      </div>
      <div className={styles.maps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0498078863807!2d37.6269986388016!3d55.71278444705659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b22a91ac945%3A0xf19f72681321ff46!2sIThub%20college!5e0!3m2!1sru!2sru!4v1707748668441!5m2!1sru!2sru"
          width="1360"
          height="350"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
