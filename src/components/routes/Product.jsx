import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetails/ProductDescription'
import SimilarProducts from '../productDetails/SimilarProducts'

const Product = () => {

  const { id } = useParams()

  const [productDetails, setProductDetails] = useState()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProductDetails(res.data.data.product))
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <ProductDescription
        productDetails={productDetails}
      />
      <SimilarProducts
        productDetails={productDetails}
      />
    </div>
  )
}

export default Product
