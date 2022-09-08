import React from 'react'

const ProductPurchase = ({ product }) => {

    return (
        <li className='card__purchase'>
            <h4 className='card__purchase-title'>{product.title}</h4>
            <span className="card__purchase-quantity">{product.productsInCart.quantity}</span>
        </li>
    )
}

export default ProductPurchase
