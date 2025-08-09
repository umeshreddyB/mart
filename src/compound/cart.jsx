import Navbar from './Navbar';
import { useCart } from "./CartContext";
import {Link} from 'react-router-dom';


function Cart() {
  const { cartItems } = useCart();
  const cartItemList = Object.values(cartItems);

  const isEmpty= cartItemList.length === 0;
  return (
    <>
    <div>
        <Navbar />

          <div className='pt-20'>
          
            {isEmpty ? (
                <div className='flex flex-col items-center justify-center gap-4 min-h-screen'>
                  <img className="h-80 w-80" alt="empty cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSZiic8VHntIKjEIdImHrRIkEB13RN-Qbkg&s" />
                <Link to="/home" className='bg-green-500 px-5 py-3 border rounded-md text-white'> Browse Products </Link>
                </div>
            ) : (
              <div className='p-5 min-h-screen flex flex-col gap-5 bg-gray-50 overflow-y-auto'>
                  {cartItemList.map(item => (
                    <div key={item.id} className="bg-green-600 shadow-md rounded-lg mb-4 text-white">
                      <div className="flex items-center justify-between p-4 border-b ">
                        <img className="h-20 w-20 object-cover" alt={item.name} src={item.image} />
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold">{item.name}</span>
                          <span >Price: {(parseFloat(item.price) * item.count).toFixed(2)}</span>
                          <span >Count: {item.count}</span>
                        </div>
                      </div>
                    </div>))}
                </div>
              
            )}
          
        </div>
    </div>
    </>
  )
}

export default Cart