export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#f2faff] z-40 flex flex-col items-center justify-center 
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-800 text-2xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-3xl font-semibold text-gray-800 hover:text-gray-500 my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Home
      </a>

      <a
        href="#templates"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-gray-800 my-4 hover:text-gray-500 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Templates
      </a>

      <a
        href="#build"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-gray-800 hover:text-gray-500 my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Build
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-gray-800  hover:text-gray-500 my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        About Us
      </a>
      <a
        href="#templates"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-gray-800  hover:text-gray-500 my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Profile
      </a>
      <button className="px-6 py-2 mt-2.5 border-2 border-[#489af2] text-[#489af2] rounded-xl hover:bg-[#489af2] hover:text-white transition duration-300">
         Sign Out
      </button>
    </div>
  );
};
