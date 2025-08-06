import { Link, useNavigate, useLocation } from "react-router-dom";

import Cookies from "js-cookie";
function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
  
    const Logout = () => {
        Cookies.remove('jwt-token');
        return navigate("/", { replace: true });
    };

    return (
        <div className="flex justify-between items-center shadow-lg px-10 py-4 fixed w-full bg-green-500 border-none z-20">
            <img className="h-10 w-20" alt="log" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1juwqHLwU6_K8ZOSicNLwg4l4bth6NxC5LzVSH__kFYIjcyAv" />
            <div className="flex items-center gap-6">
                <Link to="/home" className={pathname=="/home" ? ("bg-white text-green-500 px-2 py-1 border-none rounded font-medium"):("text-white")} >Home</Link>
                <Link to="/cart" className={pathname=="/cart" ? ("bg-white text-green-500 px-2 py-1 border-none rounded font-medium"):("text-white")}>Cart</Link>
                <button className="hover:font-bold text-white" onClick={Logout}>Logout</button>
            </div>
        </div>
    );
}
export default Navbar;