import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../routes/Home'

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to={<Home />}>
                <div className='header__logo__container'>
                    <h1 className="header__logo">e-commerce</h1>
                </div>
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'link__active' : 'link'} to='/login' ><i className='bx bxs-user-circle' ></i></NavLink></li>
                    <li className="header__item"><NavLink className={({ isActive }) => isActive ? 'link__active' : 'link'} to='/purchases'><i className='bx bxs-box' ></i></NavLink></li>
                    <li className="header__item"><div><i className='bx bxs-cart-alt'></i></div></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
