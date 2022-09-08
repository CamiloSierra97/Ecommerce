import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const CartProducts = ({ cartProduct, getAllProductsCart }) => {

    const deleteProduct = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${cartProduct.id}`
        axios.delete(URL, getConfig())
        .then(res => {
            console.log(res => res.data)
            getAllProductsCart()
        })
        .catch(console.log(err => console.log(err)))
    }

    return (
        <article className="cart__item">
            <header className="cart__item-header">
                <h4 className="cart__category">{cartProduct.brand}</h4>
                <h3 className="cart__name">{cartProduct.title}</h3>
            </header>
            <i className='cart__trash bx bxs-trash' onClick={deleteProduct}></i>
            <span className="cart__quantity">{cartProduct.productsInCart.quantity}</span>
            <footer className="cart__item-footer">
                <span className="cart__total-label">Total:</span>
                <p className="cart__total-number">&#36; {cartProduct.price}</p>
            </footer>
        </article>
    )
}

export default CartProducts
