import Login from './compound/login'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './compound/home'
import Cart from './compound/cart'
import { CartProvider } from './compound/CartContext';


function App() {
    return (
      <>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
      </>
    )
}

export default App
