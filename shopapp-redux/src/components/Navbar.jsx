import React from 'react'
import { useSelector } from 'react-redux';
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import Cart from '../pages/Cart'
const Navbar = () => {
  const {cart} = useSelector((state)=>state);

  return (
    <div >
      <div className=' flex flex-row justify-between items-center max-w-5xl mx-auto my-2 '>
        <NavLink to='/'>
          <div>
            <img src="/logo.png" alt="Logo" className="w-25 h-10"/>
          </div>
        </NavLink>
        <div className='flex gap-x-6 items-center text-white text-xl'>
          <NavLink to='/'>
             <p>Home</p>
          </NavLink>
          <NavLink to='/blog'>
             <p>Shop</p>
          </NavLink>
          <NavLink to='/cart'>
            <div className='relative'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 && 
              <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
