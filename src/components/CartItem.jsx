import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { formatCurrency } from "../utils/helpers";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../redux/actions/cartActions";
function CartItem({ item }) {
  const { id, title, image, price, amount } = item;
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };
  const handleIncreaseAmount = () => {
    dispatch(increaseAmount(id));
  };
  const handleDecreaseAmount = () => {
    dispatch(decreaseAmount(id));
  };
  return (
    <div className="flex gap-x-4 py-2 lg:py-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & icon for remove */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              className="text-xl cursor-pointer"
              onClick={() => handleRemoveFromCart()}
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition " />
            </div>
          </div>
          {/* quantity, price, final price */}
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex max-w-[100px]  items-center h-full border text-primary font-medium flex-1">
              <div
                onClick={() => handleDecreaseAmount()}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="flex-1 h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => handleIncreaseAmount()}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* price */}
            <div className="flex  flex-1 items-center justify-around">
              {formatCurrency(price)}
            </div>
            {/* final price */}
            <div className="flex flex-1 justify-end items-center text-primary font-medium">
              {formatCurrency(amount * price)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
