import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function WrapNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    
    </>
  );
}
export default WrapNavbar;