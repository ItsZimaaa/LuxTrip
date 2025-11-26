import { BookOpen, Briefcase, Home, Phone, Star, User } from "lucide-react";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const NavItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: Home,
    },
    {
      id: 2,
      title: "Luxury packages",
      path: "/Packages",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Book with us",
      path: "/Book with us",
      icon: BookOpen,
    },
    {
      id: 4,
      title: "Why Lux Trips",
      path: "/Why Lux Trips",
      icon: Star,
    },
    {
      id: 5,
      title: "Contact",
      path: "/Contact",
      icon: Phone,
    },
    {
      id: 6,
      title: "Client Area",
      path: "/Client Area",
      icon: User,
    },
  ];

  const [open, setopen] = useState(false);
  const toggleMenu = () => setopen((open) => !open);

  return (
    <Context.Provider value={{ NavItems, toggleMenu, open }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
