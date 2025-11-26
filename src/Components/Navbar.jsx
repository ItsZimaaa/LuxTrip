import { Menu } from "lucide-react";
import Logo from "../assets/Logo.svg";
import Button from "./Button";
import { useContext } from "react";
import { Context } from "../Context/Context.jsx";
import { Link } from "react-router-dom";
import NavbarMobileMenu from "./NavbarMobileMenu.jsx";

export default function Navbar() {
  const { NavItems, toggleMenu, open } = useContext(Context);

  return (
    <main>
      <nav className="side fixed top-0 right-0 left-0 z-90 container flex items-center justify-between py-4">
        {/* Logo */}
        <picture className="ml-4 md:ml-0">
          <img src={Logo} />
        </picture>
        {/* Menu */}
        <div
          onClick={toggleMenu}
          className="flex w-10 items-center justify-center md:hidden"
        >
          <Menu />
        </div>
        {/* Navbar */}
        <ul className="hidden w-[50%] grid-cols-6 md:grid">
          {NavItems.map((item) => (
            <li
              key={item.id}
              className="flex cursor-pointer items-center justify-center hover:font-bold"
            >
              <Link to={item.path}>{item.title}</Link>
              {/* {item.title} */}
            </li>
          ))}
        </ul>
        {/* button */}
        <div className="hidden w-50 md:flex">
          <Button />
        </div>
      </nav>

      <section>{open && <NavbarMobileMenu />}</section>
    </main>
  );
}
