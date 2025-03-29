import { useEffect } from "react";
import { Link } from "react-router";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-gray-200 backdrop-blur-lg border-b border-white/10 shadow-xl">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-15">
          <div
            href="#home"
            className="font-mono text-xl font-bold text-gray-800"
          >
            <img
              src="/openart-image_iaU5tqF4_1743225684481_raw.jpg"
              className="rounded-full w-12 h-12 "
            ></img>
          </div>
          <div
            className="w-7 h-5 relative cursor-pointer md:hidden text-gray-800"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg"
            >
              Home
            </Link>
            <Link
              to="/templates"
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg"
            >
              Templates
            </Link>
            <Link
              to="/build"
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg"
            >
              Build
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-800 hover:text-gray-500 transition-colors font-bold text-lg "
            >
              About Us
            </Link>
            <Link to="/signin">
              <button className="px-6 py-2 bg-[#489af2] text-white rounded-xl hover:scale-105 transition-transform duration-300 mr-4">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 pb-1 border-2 border-[#489af2] text-[#489af2] rounded-xl hover:bg-[#489af2] hover:text-white transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
