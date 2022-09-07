import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <article className='product-card' onClick={handleNavigate}>
            <header className='product-card__header'>
                <img className='product-card__img' src={product.productImgs[0]} alt={product.description} />
            </header>
            <div className="product-card__body">
                <h3 className="product-card__title">{product.title}</h3>
                <section className="product-card__price">
                    <h4 className="product-card__price-label">Price</h4>
                    <span className="product-card__price-value">{product.price}</span>
                </section>
                <button className="product-card__btn"><i className='bx bxs-cart-add'></i></button>
            </div>
        </article>
    )
}

export default ProductCard
