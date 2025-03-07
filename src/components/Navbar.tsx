import { useState } from "react";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Brand</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ThemeSwitch/>
          <ul className="lg:flex lg:space-x-4">
            <li>
              <a href="#" className="block text-white p-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-white p-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-white p-2">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-white p-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

