import React from "react";
import { useEffect, useState } from "react";
import ShowProducts from "../components/ShowProducts/ShowProducts";
import { useLocation } from "react-router-dom";

const AllSales = () => {
  const location = useLocation();

  return (
    <div>
      <h1>All sales</h1>
      <ShowProducts from={location.pathname}></ShowProducts>
    </div>
  );
};

export { AllSales };
