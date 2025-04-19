import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import Footer from './components/footer'
import Login from './components/Login'
import { useAppContext } from './context/AppContext'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProducrDetails'
import Cart from './pages/cart'


const App = () => {

  const isSellerpath = useLocation().pathname.includes('/seller')
  const {showUserLogin} = useAppContext()
  return (
    <div>

      {isSellerpath ? null :<Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <div className={'${isSellerpath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}'}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/products/:category' element={<ProductCategory/>}/>
          <Route path='/products/:category/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      {!isSellerpath && <Footer />}
    </div>
  )
}

export default App
