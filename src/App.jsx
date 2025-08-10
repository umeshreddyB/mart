import Login from './pages/login'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import { CartProvider } from './contexts/CartContext';
import WrapNavbar from './compound/wrapNavbar'


function App() {
    return (
      <>
      <CartProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<WrapNavbar />}>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
          </Route>
        
        </Routes>
      </CartProvider>
      </>
    )
}

export default App
