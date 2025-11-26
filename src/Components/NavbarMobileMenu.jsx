import { useContext } from "react";
import { Context } from "../Context/Context.jsx";
import { Link } from "react-router-dom";

export default function NavbarMobileMenu() {
  const { NavItems } = useContext(Context);

  return (
    <nav className="absolute inset-0 z-100 flex bg-black/40 backdrop-blur-2xl">
      {/* Sidebar panel */}
      <div className="flex h-full w-72 flex-col gap-6 border-r border-white/20 bg-white/10 p-6 backdrop-blur-xl">
        {NavItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.path}
              className="flex items-center gap-3 text-lg font-medium text-white transition-colors hover:text-blue-300"
            >
              <Icon size={22} />
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* Clickable empty area to close menu */}
      <div className="flex-1"></div>
    </nav>
  );
}
