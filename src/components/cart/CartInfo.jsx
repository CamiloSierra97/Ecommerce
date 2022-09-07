import React from 'react'

const CartInfo = () => {
    return (
        <article className="cart__item">
            <header className="cart__item-body">
                <h4 className="cart__item-category"></h4>
                <h3 className="cart__item-name"></h3>
                <i class='cart__item-trash bx bxs-trash'></i>
                <span className="cart__item-quantity"></span>
                <div className="cart__item-total"><span className="cart__item-total-label">Total:</span></div>
                <p className="cart__item-total-number"></p>
            </header>
        </article>
    )
}

export default CartInfo
