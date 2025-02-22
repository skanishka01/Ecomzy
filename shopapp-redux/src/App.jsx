import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Footer from './components/Footer'
import CheckOut from './pages/CheckOut'
// import Start from './pages/Start'

const App = () => {
  return (
    <div>
      <div className='bg-slate-800 p-3  ' >
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
