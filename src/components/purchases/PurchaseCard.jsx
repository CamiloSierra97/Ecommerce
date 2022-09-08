import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({ purchase }) => {



    return (
        <article className="card__purchase">
            <h3 className="card__purchase-date">{purchase.createdAt}</h3>
            <ul className="card__purchase-body">
                {
                    purchase.cart.products.map(product => {
                        <ProductPurchase
                            key={product.id}
                            product={product}
                        />
                    })
                }
            </ul>
        </article>
    )
}

export default PurchaseCard
