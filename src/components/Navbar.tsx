import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 top-0">
      <nav className="h-16 w-full bg-red-400 flex justify-between items-center px-12 dark:bg-red-900">
        <div className="font-bold text-3xl">
          <Link to="/">yoga.qf</Link>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-3 mr-5">
            <li className="hover:underline transition-all text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline transition-all text-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline transition-all text-lg">
              <Link to="/portofolio">Portofolio</Link>
            </li>
            <li className="hover:underline transition-all text-lg">
              <Link to="/portofolio">Contact Us</Link>
            </li>
          </ul>
          <div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
