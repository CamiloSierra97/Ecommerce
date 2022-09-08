import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../../utils/getConfig'
import CartInfo from '../cart/CartInfo'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    useEffect(() => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
            .then(res => setCartProducts(res.data.data.cart.products))
            .catch(err => console.log(err))
    }, [])

    console.log(cartProducts)

    return (
        <section className="cart">
            <h2 className="cart__title">Cart</h2>
            <div className="cart__container">
                {
                    cartProducts?.map(cartProduct => {
                        <CartInfo 
                        key={cartProduct.id}
                        cartProduct={cartProduct}
                        />
                    })
                }
            </div>
            <hr className='cart__hr' />
            <footer className='cart__footer'>
                <span className="cart__total-global"></span>
                <p className="cart__total-value"></p>
                <button className="cart__btn"></button>
            </footer>
        </section>
    )
}

export default Cart
