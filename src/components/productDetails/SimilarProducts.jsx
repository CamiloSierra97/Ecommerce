import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../home/ProductCard";

const SimilarProducts = ({ productDetails }) => {
  const [filterSimilarProducts, setFilterSimilarProducts] = useState();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (productDetails && products) {
      const filter = products?.filter(
        (e) => e.category.id === productDetails.category.id
      );
      setFilterSimilarProducts(filter);
    }
  }, [productDetails]);


  return (
    <>
      <h3 className="title__similar-products">Similar products</h3>
      <div className="container__similar-products">
        {filterSimilarProducts?.map((similarProduct) => {
          if (similarProduct.title !== productDetails.title) {
            return (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            );
          }
        })}
      </div>
    </>
  );
};

export default SimilarProducts;
