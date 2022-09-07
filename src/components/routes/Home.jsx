import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import ProductCard from '../home/ProductCard'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const products = useSelector(state => state.products)

  return (
    <div className='home'>
      <div className="home__container-card">
        {
          products?.map(product => (
            <ProductCard 
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
