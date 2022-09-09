import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Product from './components/routes/Product'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Purchases from './components/routes/Purchases'
import Cart from './components/routes/Cart'
import Navbar from './components/shared/Navbar'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: 'Maria José',
  //     lastName: 'Patino',
  //     email: 'majo@gmail.com',
  //     password: 'majo2022',
  //     phone: '3192036492',
  //     role: 'admin'
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<Product />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
