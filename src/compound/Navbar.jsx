import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
function Navbar() {
    const user = Cookies.get("jwt-token");
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();

    const Logout = () => {
        Cookies.remove("jwt-token");
        navigate("/login");
    };
    return (
        <div className="flex flex-col md:flex-row justify-between items-center shadow-lg px-4 md:px-10 py-3 md:py-4 fixed w-full bg-green-500 border-none z-20">
            <img className="h-8 w-16 md:h-10 md:w-20 mb-2 md:mb-0" alt="log" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1juwqHLwU6_K8ZOSicNLwg4l4bth6NxC5LzVSH__kFYIjcyAv" />
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                <Link to="/" className={pathname==="/" ? ("bg-black text-green-500 px-2 py-1 border-none rounded font-bold"):("font-bold")} >Home</Link>
                <Link to="/cart" className={pathname==="/cart" ? ("bg-black text-green-500 px-2 py-1 border-none rounded font-bold"):("font-bold")}>Cart</Link>
                { user === undefined
                    ? (<Link to="/login" className="font-bold">Login</Link>)
                    : (<button className="font-bold" onClick={Logout}>Logout</button>)
                }
            </div>
        </div>
    );
}
export default Navbar;