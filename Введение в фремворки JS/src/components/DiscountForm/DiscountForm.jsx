import styles from "./DiscountForm.module.css";
import React, { useEffect, useState } from "react";
import FormImage from "../../img/formImg.svg";
import { useForm } from "react-hook-form";

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    
    try {
        const response = await fetch('http://localhost:3333/sale/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          console.log('Запрос успешно отправлен!');
          
        } else {
          console.error('Ошибка при отправке запроса:', response.statusText);
          
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error.message);
        
      }
    
  };
  return (
    <>
      <div className={styles.formdiv}>
        <h1>5% off on the first order</h1>

        <div className={styles.content}>
          <img className={styles.img} src={FormImage} max-heigth="auto"></img>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className={styles.field} placeholder={"Name"}
                {...register("name", { required: true })}
              />
              {errors.name && <span><br></br>Поле обязательно</span>}
            </div>

            <div>
              <input
                className={styles.field} placeholder={"Phone number"}
                type="tel"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span><br></br>Поле обязательно</span>}
            </div>

            <div>
              <input
                className={styles.field} placeholder={"Email"}
                type="email" 
                {...register("email", { required: true })}
              />
              {errors.email && <span><br></br>Поле обязательно</span>}
            </div>

            <button className={styles.button} type="submit">
              Get a discount
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
