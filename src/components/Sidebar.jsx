import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";
import { handleClose } from "../redux/actions/sidebarActions";
function Sidebar() {
  const { isOpen } = useSelector((state) => state.sidebar);
  const { cart, total, itemAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleclose = () => {
    dispatch(handleClose());
  };
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed  top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px] `}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleclose}
          className="cursor-pointer w-8 h-8 flex items-start justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[480px] md:h-[480px] lg:h-[480px] overflow-y-auto overflow-x-hidden">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-1 py-2 mt-4">
        <div className="flex w-full  justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span>Total:</span>
            {formatCurrency(total)}
          </div>
          {/* clear cart */}
          <div
            onClick={() => handleClearCart()}
            className="cursor-pointer py-2 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary font-medium w-full"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-primary text-white flex p-4 justify-center items-center font-medium w-full"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
