import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import getConfig from '../../utils/getConfig'

const ProductDescription = ({ productDetails }) => {

    const [counter, setCounter] = useState(1)

    const plus = () => setCounter(counter + 1)

    const minus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }

    const addToCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const data = {
            id: productDetails.id,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <section className="product__info">
            <h2 className="product__info-name">{productDetails?.title}</h2>
            <p className="product__info-desc">{productDetails?.description}</p>
            <div className="product__info-body">
                <article className="product__info-price">
                    <h3 className="product__info-price-label">Price</h3>
                    <span className="product__info-price-value">{productDetails?.price}</span>
                </article>
                <article className="product__info-quantity">
                    <h3 className="product__info-quantity-label">
                        <div className="product__info-quantity-box">
                            <h4 className="product__info-quantity-title">Quantity</h4>
                            <div className="product__info-quantity-counter">
                                <button onClick={minus}>-</button>
                                <div>{counter}</div>
                                <button onClick={plus}>+</button>
                            </div>
                            <button className="product__info-btn-cart" onClick={addToCart}>Add to cart</button>
                        </div>
                    </h3>
                </article>
            </div>
        </section>
    )
}

export default ProductDescription
