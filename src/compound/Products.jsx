import { useCart } from "../contexts/CartContext";
function Products({ pros }) {
    const { cartItems, addItem, removeItem } = useCart();

    return (
        <div>
            <h1 className="font-bold text-xl mb-4">{pros.name}</h1>
            <div className="flex flex-wrap gap-6">
                {pros.products.map(each => {
                    const count = cartItems[each.id]?.count || 0;
                    return (
                        <div
                            key={each.id}
                            className="flex flex-col w-[200px] border-green-400 rounded-lg p-4 bg-white shadow hover:shadow-xl transition"
                        >
                            <img
                                className="h-20 w-full object-cover border-none rounded-lg mb-2"
                                alt={each.name}
                                src={each.image}
                            />
                            <div className="mb-2">
                                <p className="flex justify-between text-sm">
                                    <span className="text-green-800">Name:</span>
                                    <span>{each.name.slice(0,5)}</span>
                                </p>
                                <p className="flex justify-between text-sm">
                                    <span className="text-green-800">Weight:</span>
                                    <span>{each.weight}</span>
                                </p>
                                <p className="flex justify-between text-sm">
                                    <span className="text-green-800">Price:</span>
                                    <span>{each.price}</span>
                                </p>
                            </div>
                            {count > 0 ? (
                                <div className="text-green-500 text-sm border py-1 mt-auto rounded border-green-500 flex items-center justify-around">
                                    <button onClick={() => removeItem(each)} className="text-md px-2 hover:cursor-pointer">-</button>
                                    <p>Items in Cart: {count}</p>
                                    <button onClick={() => addItem(each)} className="text-md px-2 hover:cursor-pointer">+</button>
                                </div>
                            ) : (
                                <button onClick={() => addItem(each)} className="bg-green-500 text-white border py-1 mt-auto rounded hover:hover:cursor-pointer bg-green-600 transition">
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;