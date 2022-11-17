import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import getConfig from "../../utils/getConfig";
import CartProducts from "../cart/CartProducts";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState();

  const [cartProducts, setCartProducts] = useState();

  const getAllProductsCart = () => {
    const URL = "https://sierra-ecommerce.onrender.com/api/v1/users/me/cart";
    axios
      .get(URL, getConfig())
      .then((res) => {
        const products = res.data;
        setCartProducts(products);
        console.log(products);
        const total = products.reduce((acc, cv) => {
          return Number(cv.product.price) + Number(cv.amount + acc);
        }, -1);
        setTotalPrice(total);
      })
      .catch((err) => console.log(err));
  };

  console.log(totalPrice);
  useEffect(() => {
    getAllProductsCart();
  }, []);

  const checkout = () => {
    const URL = "https://sierra-ecommerce.onrender.com/api/v1/purchases";
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data);
        getAllProductsCart();
        setTotalPrice(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      <div className="cart__container">
        {cartProducts?.map((cartProduct) => (
          <CartProducts
            key={cartProduct.id}
            cartProduct={cartProduct}
            getAllProductsCart={getAllProductsCart}
          />
        ))}
      </div>
      <hr className="cart__hr" />
      <footer className="cart__footer">
        <span className="cart__total-global">Total:</span>
        <p className="cart__total-value">&#36; {totalPrice}</p>
        <button className="cart__btn" onClick={checkout}>
          Checkout
        </button>
      </footer>
    </section>
  );
};

export default Cart;
