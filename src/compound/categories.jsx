import { useState } from "react"



function Categories ({props, callBack}) {
    const data = props;
    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        callBack(category);
    };

    return (
        <div className="flex flex-col min-w-60 text-center pt-6 p-5 gap-5 shadow-lg hover:cursor-pointer bg-white rounded-lg">
            <p className="font-bold-lg text-3xl">Categories</p>
            <nav
                className={selectedCategory==="All" ? "bg-green-400 text-white p-2 rounded-md" : "p-2"}
                onClick={() => handleCategoryClick("All")}
            >
                All
            </nav>
            {data.length > 0 ? data.map((each) => (
                <a
                    onClick={() => handleCategoryClick(each.name)} // send key directly
                    className={selectedCategory===each.name ? "bg-green-400 text-white p-2 rounded-md" : "p-2 "}
                    key={each.name}
                >
                    {each.name}
                </a>
            )) : (<h1>data not found</h1>)}
        </div>
    )
}
export default Categories
