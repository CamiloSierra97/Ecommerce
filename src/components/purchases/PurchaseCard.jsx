import React from "react";
import ProductPurchase from "./ProductPurchase";

const PurchaseCard = ({ purchase }) => {
  return (
    <div className="card__container">
      <article className="card__purchase">
        <div className="card_purchase-date-container">
          <h3 className="card__purchase-date">{purchase.createdAt}</h3>
        </div>
        <ul className="card__purchase-body">
          {purchase.cart.products.map((product) => (
            <ProductPurchase key={product.id} product={product} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default PurchaseCard;
