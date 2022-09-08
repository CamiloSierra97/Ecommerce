import React from 'react'

const CartInformation = ({ cartProduct }) => {

    console.log(cartProduct)

    return (
        <article className="cart__item">
            <header className="cart__item-body">
                <h4 className="cart__item-category">{cartProduct.brand}</h4>
                <h3 className="cart__item-name">{cartProduct.title}</h3>
                <i class='cart__item-trash bx bxs-trash'></i>
                <span className="cart__item-quantity">{cartProduct.productsInCart.quantity}</span>
                <div className="cart__item-total"><span className="cart__item-total-label">Total:</span></div>
                <p className="cart__item-total-number">&#36; {cartProduct.price}</p>
            </header>
        </article>
    )
}

export default CartInformation
