import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import getConfig from "../../utils/getConfig";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const URL = `https://sierra-ecommerce.onrender.com/api/v1/carts/${product.id}`;
  let productInCart = [];

  const addToCart = (e) => {
    e.stopPropagation();
    axios
      .get(URL, getConfig())
      .then((res) => {
        productInCart.push(res.data);
        axios
          .patch(
            URL,
            { amount: productInCart[0]?.amount + 1, productId: product.id },
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
            { amount: 1, productId: product.id },
            getConfig()
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });
  };

  return (
    <article className="product-card" onClick={handleNavigate}>
      <header className="product-card__header">
        <img
          className="product-card__img"
          src={product.images_pack.images[0].url}
          alt={product.description}
        />
        <img
          className="product-card__img-active"
          src={product.images_pack.images[1].url}
          alt={product.description}
        />
      </header>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <section className="product-card__price">
          <div className="product-card__price-container">
            <h4 className="product-card__price-label">Price</h4>
            <span className="product-card__price-value">
              &#36; {product.price}
            </span>
          </div>
          <div className="product-card__btn-container">
            <button className="product-card__btn" onClick={addToCart}>
              <i className="bx bxs-cart-add"></i>
            </button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProductCard;
