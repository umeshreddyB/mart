import { useState, useEffect } from "react";
import Categories from "../compound/categories";
import Products from "../compound/Products";
import { Link, Navigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {cartItems}=useCart()
    


    useEffect(() => {
        const getdata = async () => {
            setLoading(true);
            try{
                const reponse = await fetch("https://apis2.ccbp.in/nxt-mart/category-list-details");
                const data = await reponse.json();
                setProducts(data.categories);
                setFilteredProducts(data.categories);
                setLoading(false);
            }
            catch(error) {
                console.error("Error fetching data:", error);
                setFilteredProducts([])
                setProducts([])
                setLoading(false);
            }
        };
        getdata();
    }, []);


    const callBack = (category) => {
        if(category === "All"){
            setFilteredProducts(products);
        }
        else{
            const filtered = products.filter(each => each.name === category);
            setFilteredProducts(filtered);
        }
    }
    
    return (
        <div className="m-0">
            <div className="p-2 sm:p-5 pt-20 min-h-screen flex flex-col md:flex-row gap-3 md:gap-5 bg-gray-50 ">
                <div className="mb-4 md:mb-0">
                    <Categories props={products} callBack={callBack}/>
                </div>
                <div className="pt-4 sm:pt-6 flex-1 flex flex-col gap-4 sm:gap-8">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-full text-lg text-gray-500">Loading...</div>
                    ) : (filteredProducts.map(each => <Products pros={each} key={each.name} />)
                    )}
                </div>
            </div>
            {Object.keys(cartItems).length > 0 ? (
                <Link
                    to="/cart"
                    className="flex items-center justify-around gap-2 sm:gap-4 fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50">
                    <img className="h-8 w-8 sm:h-10 sm:w-10"  alt="cart" src="https://pngimg.com/d/shopping_cart_PNG10.png"/>
                    <div>
                        <p className="font-bold text-sm sm:text-md"> View Cart  </p>
                        <p className="text-xs sm:text-base"> {Object.keys(cartItems).length} items</p>
                    </div>
                    <p className="font-bold text-2xl sm:text-3xl"> &gt;</p>  
                </Link>):null
            }
        </div>
    );
}

export default Home;

