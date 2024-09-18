import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import useOutsideClick from "../services/useOutsideClick.js";
import { createPortal } from "react-dom";
const MenusContext = createContext();
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);
  return (
    <MenusContext.Provider
      value={{ openId, position, close, open, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}
function Menu({ children }) {
  return <div className="flex items-center justify-start ">{children}</div>;
}
function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    if (openId !== id || openId === "") open(id);
    else close();
  }
  return (
    <button
      onClick={handleClick}
      className="bg-none border-none p-[0.4rem] rounded-sm translate-x-[0.8rem] transition-all duration-[0.2s]"
    >
      <HiEllipsisVertical className="w-[1.6rem] h-[1.6rem] text-gray-400" />
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);
  if (id !== openId) return;
  return createPortal(
    <ul
      className="fixed bg-gray-50 shadow-md rounded-md text-gray-500"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}
function Button({ children, icon, onClick }) {
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li className="">
      <button
        onClick={handleClick}
        className=" w-full text-left bg-none border-none py-[1.2rem] px-[2.4rem] text-[1.4rem] transition-all duration-[0.2s] flex items-center gap-[1.6rem] hover:bg-gray-300"
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
export default Menus;
