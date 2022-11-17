import axios from "axios";
import React from "react";
import getConfig from "../../utils/getConfig";

const CartProducts = ({ cartProduct, getAllProductsCart }) => {
  console.log(cartProduct);
  const deleteProduct = () => {
    const URL = `https://sierra-ecommerce.onrender.com/api/v1/carts/${cartProduct.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        console.log((res) => res.data);
        getAllProductsCart();
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="cart__item-container">
      <div className="cart__item ">
        <header className="cart__item-header">
          <div className="cart__item-header-interior">
            <h5 className="cart__category">{cartProduct.brand}</h5>
            <h3 className="cart__name">{cartProduct.title}</h3>
          </div>
          <i className="cart__trash bx bxs-trash" onClick={deleteProduct}></i>
        </header>
      </div>
      <div className="cart__item-footer-container">
        <footer className="cart__item-footer">
          <span className="cart__quantity">
            {cartProduct.productsInCart.quantity}
          </span>
          <span className="cart__total-label">Price</span>
          <p className="cart__total-number">&#36; {cartProduct.price}</p>
        </footer>
      </div>
    </article>
  );
};

export default CartProducts;
