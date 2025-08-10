import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function Cart({ isLoggedIn, onRequireLogin }) {
  const { cartItems } = useCart();
  const cartItemList = Object.values(cartItems);
  const isEmpty = cartItemList.length === 0;
  console.log(cartItemList);
  const handlePay = () => {
    if (!isLoggedIn) {
      onRequireLogin();
      return;
    }
    alert("Proceeding to payment...");
  };

  return (
    <div className="pt-20">
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
          <img
            className="h-80 w-80"
            alt="empty cart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSZiic8VHntIKjEIdImHrRIkEB13RN-Qbkg&s"
          />
          <Link
            to="/"
            className="bg-green-500 px-5 py-3 border rounded-md text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="p-5 min-h-screen flex flex-col  gap-5 bg-gray-50">
          {cartItemList.map((item) => (
            <div
              key={item.id}
              className="shadow-md border-none rounded-lg mb-4 text-green-800 bg-white"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-4">
                    <img
                      className="h-20 w-20 object-cover"
                      alt={item.name}
                      src={item.image}
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{item.name}</span>
                        <span>
                          Price: {item.price}
                        </span>
                      </div>
                  </div>
                  
                  <div className="flex flex-col">
                  
                    <h2>Count: {item.count}</h2>
                  </div>
              </div>
            </div>
          ))}

          {/* Pay Now button */}
          <button
            onClick={handlePay}
            className="fixed bottom-10 left-1/2 text-3xl bg-green-500 px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
