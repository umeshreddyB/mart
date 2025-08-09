import { useState, useEffect } from "react";
import Categories from "./categories";
import Products from "./Products";
import Navbar from "./Navbar";
import { Link, Navigate } from "react-router-dom";
import { useCart } from "./CartContext";

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
            <Navbar />
            <div className="p-5 pt-20 min-h-screen flex gap-5 bg-gray-50 ">
                <div className="">
                    <Categories props={products} callBack={callBack}/>
                </div>
                <div className="pt-6 flex-1 flex flex-col gap-8">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-full text-lg text-gray-500">Loading...</div>
                    ) : (filteredProducts.map(each => <Products pros={each} key={each.name} />)
                    )}
                </div>
            </div>


            {Object.keys(cartItems).length > 0 ? (
                <Link
                    to="/cart"
                    className="flex items-center justify-around gap-4 fixed bottom-5 left-1/2 bg-green-500 px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
                    <img className="h-10 w-10"  alt="cart" src="https://pngimg.com/d/shopping_cart_PNG10.png"/>
                    <div>
                        <p className="font-bold text-md"> View Cart  </p>
                        <p> {Object.keys(cartItems).length} items</p>
                    </div>
                    <p className="font-bold text-3xl"> &gt;</p>  
                </Link>):null
            }
        
        </div>
    );
}

export default Home;
