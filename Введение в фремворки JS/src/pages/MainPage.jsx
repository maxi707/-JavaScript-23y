import React from "react";
import Head from "../components/Head/Head";
import Categories from "../components/Categories/Categories";
import DiscountForm from "../components/DiscountForm/DiscountForm";
import Sales from "../components/Sales/Sales";

export default function MainPage() {
  return (
    <>
      <Head></Head>
      <Categories total="4"></Categories>
      <DiscountForm></DiscountForm>
      <Sales></Sales>
    </>
  );
}
