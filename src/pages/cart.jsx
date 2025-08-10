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
            className="h-40 w-40 sm:h-80 sm:w-80"
            alt="empty cart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSZiic8VHntIKjEIdImHrRIkEB13RN-Qbkg&s"
          />
          <Link
            to="/"
            className="bg-green-500 px-4 sm:px-5 py-2 sm:py-3 border rounded-md text-white text-sm sm:text-base"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="p-2 sm:p-5 min-h-screen flex flex-col gap-3 sm:gap-5 bg-gray-50">
          {cartItemList.map((item) => (
            <div
              key={item.id}
              className="shadow-md border-none rounded-lg mb-4 text-green-800 bg-white"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 border-b">
                <div className="flex items-center gap-2 sm:gap-4">
                    <img
                      className="h-14 w-14 sm:h-20 sm:w-20 object-cover"
                      alt={item.name}
                      src={item.image}
                    />
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg font-semibold">{item.name}</span>
                        <span>
                          Price: {item.price}
                        </span>
                      </div>
                  </div>
                  <div className="flex flex-col mt-2 sm:mt-0">
                    <h2 className="text-sm sm:text-base">Count: {item.count}</h2>
                  </div>
              </div>
            </div>
          ))}

          {/* Pay Now button */}
          <button
            onClick={handlePay}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 text-xl sm:text-3xl bg-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-600"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
