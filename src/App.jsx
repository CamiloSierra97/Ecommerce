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
  //   const URL = ''
  //   const data = {
  //     firstName: 'Camilo',
  //     lastName: 'Sierra',
  //     email: 'sierracamilo@gmail.com',
  //     password: '3192036492Camilo',
  //     phone: '3192036492',
  //     role: 'admin'
  //   }

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
