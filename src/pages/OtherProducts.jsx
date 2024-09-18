import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/actions/productActions";
import SpinnerFullPage from "../components/SpinnerFullPage";
import CardSwiper from "../components/CardSwiper";
import Swiper from "../components/Swiper";
function OtherProducts() {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) return <SpinnerFullPage />;
  return (
    <div className="pt-32 pb-12 lg:py-32 h-[200%] flex items-center justify-center">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto w-full">
          {/* top Content */}
          <div className="py-2 sm:py-14 text-center ">
            <h1 className="text-[2.4rem] font-semibold text-pink-800">
              Exclusive Product Selection
            </h1>
            <p className="text-pink-700">
              Discover our exclusive range of products, carefully curated to
              meet your needs.
            </p>
          </div>
          {/* Carousel */}
          {/* <Swiper products={products} /> */}
          <Swiper data={products}>
            <Swiper.Slides />
            <Swiper.LeftButton />
            <Swiper.RightButton />
            <Swiper.Dots />
          </Swiper>
          <div className="py-2 sm:py-14 text-center ">
            <h1 className="text-[1.4rem] m-2 sm:text-[2.4rem] font-semibold text-pink-800">
              Let&apos;s Shooping Now
            </h1>
          </div>
          <CardSwiper data={products} />
        </div>
      </div>
    </div>
  );
}

export default OtherProducts;
