import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="h-16 w-full bg-red-200 flex justify-between items-center px-12">
        <div>yoga.qf</div>
        <div>
          <ul className="flex space-x-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
