import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import CartInfo from '../cart/CartInfo'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, config)
            .then(res => setCartProducts(res.data))
            .catch(err => console.log(err))
    }, [])



    return (
        <section className="cart">
            <h2 className="cart__title">Cart</h2>
            <CartInfo />
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
