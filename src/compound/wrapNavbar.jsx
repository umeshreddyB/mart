import Navbar from "./Navbar";

function WrapNavbar({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </>
  );
}
export default WrapNavbar;