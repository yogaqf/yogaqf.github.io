import { useState } from "react";
import ThemeSwitch from "./theme-switch";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav" aria-label="Main">
        <a href="#" className="nav-logo">
          yoga.qf
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="nav-links hidden sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
          {/* <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="btn-ghost !no-underline sm:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button> */}
        </div>
      </nav>
      {isOpen ? (
        <ul className="nav-links mb-10 flex flex-col gap-3 sm:hidden">
          {navItems.map((item) => (
            <li key={`${item.href}-mobile`}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Navbar;
