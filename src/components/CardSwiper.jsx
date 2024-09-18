import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { formatCurrency } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
function CardSwiper({ data }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product, id) => {
    dispatch(addToCart(product, id));
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex h-[500px] sm:h-[650px] w-full max-w-[300px] sm:max-w-[900px] mx-auto p-2">
      <div className="relative w-full h-full">
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((item) => {
            return (
              <div
                className="bg-white rounded-lg shadow-lg shadow-lg-200 p-6 mx-2 h-[500px] sm:h-[580px] mb-10 flex flex-col items-center justify-between"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt="product image"
                  className=" h-80 w-full rounded-lg mb-4"
                />
                <h2 className="text-base text-center mb-2">{item.title}</h2>
                <p className="text-gray-500 text-md font-semibold mb-4">
                  {formatCurrency(item.price)}
                </p>
                <p>
                  <button
                    onClick={() => handleAddToCart(item, item.id)}
                    className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-400 transition"
                  >
                    Add To Cart
                  </button>
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default CardSwiper;
