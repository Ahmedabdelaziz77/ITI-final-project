import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebarActions";
function SidebarIcon() {
  const { itemAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const setIsOpen = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div onClick={() => setIsOpen()} className="cursor-pointer flex relative">
      <BsBag className="text-xl sm:text-2xl" />
      <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
        {itemAmount}
      </div>
    </div>
  );
}

export default SidebarIcon;
