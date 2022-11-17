import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getConfig from "../../utils/getConfig";
import PurchaseCard from "../purchases/PurchaseCard";

const Purchases = () => {
  const [purchases, setPurchases] = useState();

  useEffect(() => {
    const URL = "https://sierra-ecommerce.onrender.com/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => setPurchases(res.data.rows))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="purchases__title">My purchases</h2>
      <div className="purchases">
        <div className="purchases__container">
          {purchases?.map((purchase) => (
            <PurchaseCard key={purchase.id} purchase={purchase} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Purchases;
