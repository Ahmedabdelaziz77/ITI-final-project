import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerFullPage from "../components/SpinnerFullPage";
import { formatCurrency } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
function ProductDetails() {
  const { id } = useParams();
  const { currentProduct: product, loading } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);
  const handleAddToCart = () => {
    dispatch(addToCart(product, id));
  };
  const goBack = () => navigate(-1);
  if (loading) return <SpinnerFullPage />;
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* image */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[150px] sm:max-w-[200px] lg:max-w-sm"
                src={image}
                alt="product/image"
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[20px] sm:text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                {formatCurrency(price)}
              </div>
              <p className="mb-4 text-xs md:mb-4 md:text-sm lg:text-base lg:mb-8 max-h-[150px] sm:max-h-none overflow-auto ">
                {description}
              </p>
              <button
                onClick={() => handleAddToCart()}
                className="bg-primary py-4 px-8 text-white mr-2 mb-3 sm:mb-0"
              >
                Add To Cart
              </button>
              <button
                onClick={() => goBack()}
                className="bg-primary py-4 px-8 text-white"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
