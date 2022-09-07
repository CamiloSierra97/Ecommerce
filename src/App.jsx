import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Product from './components/routes/Product'
import Purchases from './components/routes/Purchases'
import Navbar from './components/shared/Navbar'

function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const obj = {
  //     firstName: 'Camilo',
  //     lastName: 'Sierra',
  //     email: 'sierracamilo3@gmail.com',
  //     password: '3192036492Camilo',
  //     phone: '3192036492',
  //     role: 'admin'
  //   }
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))

  // }, [])
  

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </div>

  )
}

export default App
