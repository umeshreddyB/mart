import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
function Navbar() {
    let user = Cookies.get("jwt-token");
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
  
    const Logout = () => {
        Cookies.remove(user);
        return navigate("/", { replace: true });
    };
    console.log("user", user);
    return (
        <div className="flex justify-between items-center shadow-lg px-10 py-4 fixed w-full bg-green-500 border-none z-20">
            <img className="h-10 w-20" alt="log" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1juwqHLwU6_K8ZOSicNLwg4l4bth6NxC5LzVSH__kFYIjcyAv" />
            <div className="flex items-center gap-6">
                <Link to="/home" className={pathname=="/home" ? ("bg-white text-green-500 px-2 py-1 border-none rounded font-medium"):("text-white")} >Home</Link>
                <Link to="/cart" className={pathname=="/cart" ? ("bg-white text-green-500 px-2 py-1 border-none rounded font-medium"):("text-white")}>Cart</Link>
                { user===undefined ? (<button className="hover:font-bold text-white" onClick={Logout}>Login</button>):(<button className="hover:font-bold text-white" onClick={Logout}>Logout</button>)}
                
            </div>
        </div>
    );
}
export default Navbar;