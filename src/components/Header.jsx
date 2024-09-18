import { useState } from "react";

import Logo from "./Logo";
import SidebarIcon from "./SidebarIcon";
import Navigation from "./Navigation";
import { useAuth } from "../contexts/AuthContext";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isAuthenticated, Logout } = useAuth();
  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-20 transition-all justify-between`}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto flex items-center justify-between h-full">
          <Logo />
          <Navigation />
          <SidebarIcon />
        </div>
        {isAuthenticated && (
          <div className="container mx-auto flex items-center justify-end h-full">
            <button
              onClick={() => Logout()}
              className="px-6 py-2 bg-pink-400 rounded-full hover:bg-pink-300 text-white"
            >
              logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
