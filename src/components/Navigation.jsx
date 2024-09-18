import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
function Navigation() {
  const baseStyle =
    "text-gray-500 hover:text-gray-900 transition-all duration-300";
  const activeStyle = "text-black border-b-2 border-gray-600 pb-2";
  const { user, isAuthenticated } = useAuth();
  return (
    <ul className="flex gap-2 sm:gap-12 sm:px-10 py-4 shadow-sm sm:shadow-md text-sm sm:text-base">
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
        >
          Products
        </NavLink>
      </li>
      {isAuthenticated && user.role === "admin" && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navigation;
