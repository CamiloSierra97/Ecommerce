import React from "react";

const ProductPurchase = ({ product }) => {
  return (
    <li className="card__purchase-item">
      <h4 className="card__purchase-title">{product.title}</h4>
      <span className="card__purchase-quantity">
        {product.productsInCart.quantity}
      </span>
      <span className="card_purchase-price">&#36; {product.price}</span>
    </li>
  );
};

export default ProductPurchase;
