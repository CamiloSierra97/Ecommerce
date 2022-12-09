import React from "react";
import { useSelector } from "react-redux";
import Loader from "../home/loader/Loader";
import ProductCard from "../home/ProductCard";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="home">
      <div className="home__container-card">
        {products ? (
          products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;
