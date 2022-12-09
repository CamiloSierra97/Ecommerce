import axios from "axios";
import React from "react";
import { useState } from "react";
import getConfig from "../../utils/getConfig";

const ProductDescription = ({ productDetails }) => {
  const [counter, setCounter] = useState(1);

  const plus = () => setCounter(counter + 1);

  const minus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };
  let productInCart = [];

  const addToCart = () => {
    const URL = `https://sierra-ecommerce.onrender.com/api/v1/carts/${productDetails.id}`;
    axios
      .get(URL, getConfig())
      .then((res) => {
        productInCart.push(res.data);
        axios
          .patch(
            URL,
            {
              amount: productInCart[0]?.amount + counter,
              productId: productDetails.id,
            },
            getConfig()
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err))
          .finally((productInCart = []));
      })
      .catch((post) => {
        axios
          .post(
            "https://sierra-ecommerce.onrender.com/api/v1/carts/",
            { amount: counter, productId: productDetails.id },
            getConfig()
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      });
  };

  return (
    <section className="product__info">
      <h2 className="product__info-name">{productDetails?.title}</h2>
      <p className="product__info-desc">{productDetails?.description}</p>
      <div className="product__info-body">
        <article className="product__info-price">
          <h3 className="product__info-price-label">Price</h3>
          <span className="product__info-price-value">
            {productDetails?.price}
          </span>
        </article>
        <article className="product__info-quantity">
          <h3 className="product__info-quantity-label">
            <div className="product__info-quantity-box">
              <h4 className="product__info-quantity-title">Quantity</h4>
              <div className="product__info-quantity-counter">
                <button onClick={minus}>
                  <i className="bx bx-minus"></i>
                </button>
                <div>{counter}</div>
                <button onClick={plus}>
                  <i className="bx bx-plus"></i>
                </button>
              </div>
              <button className="product__info-btn-cart" onClick={addToCart}>
                Add to cart
              </button>
            </div>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default ProductDescription;
