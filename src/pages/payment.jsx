import {Link} from "react-router-dom";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Payment = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-fadeIn">
        
        <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-4 animate-bounce" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment! Your order has been confirmed and will be processed shortly.
        </p>
        <Link
                     to="/"
                        className="mt-4 bg-green-500 px-4 py-2 rounded-md text-white text-sm sm:text-base"
                    >
                        Go to Home
           </Link>
        
        
      </div>
    </div>
        // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
        //     <div className="bg-black shadow-xl text-white p-30 py-20 rounded-lg flex flex-col items-center gap-6">
        //         <img alt="img1" className="h-30" src="https://thumb.r2.moele.me/t/24022/24012277/a-0145.jpg" />
        //         <CheckCircleIcon className="h-12 w-12 text-green-500" />

        //         <div className="flex flex-col items-center">
        //             <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
        //             <p className="text-lg">Thank you for your purchase!</p>
        //             <Link
        //                 to="/"
        //                 className="mt-4 bg-green-500 px-4 py-2 rounded-md text-white text-sm sm:text-base"
        //             >
        //                 Go to Home
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    );

}


export default Payment