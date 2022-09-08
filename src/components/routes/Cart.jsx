import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../../utils/getConfig'
import CartProducts from '../cart/CartProducts'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    const getAllProductsCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => setCartProducts(res.data.data.cart.products))
            .catch(err => setCartProducts())
    }

    useEffect(() => {
        getAllProductsCart()
    }, [])

    const checkout = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const data = {
            "street": "Green St. 1456",
            "colony": "Southwest",
            "zipCode": 12345,
            "city": "USA",
            "references": "Some references"
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                getAllProductsCart()
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="cart">
            <h2 className="cart__title">Cart</h2>
            <div className="cart__container">
                {
                    cartProducts?.map(cartProduct => (
                        <CartProducts
                            key={cartProduct.id}
                            cartProduct={cartProduct}
                            getAllProductsCart={getAllProductsCart}
                        />
                    ))
                }
            </div>
            <hr className="cart__hr" />
            <footer className="cart__footer">
                <span className="cart__total-global"></span>
                <p className="cart__total-value"></p>
                <button className="cart__btn" onClick={checkout}>Checkout</button>
            </footer>
        </section>
    )
}

export default Cart
