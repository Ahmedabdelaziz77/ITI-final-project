import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const SwiperContext = createContext();
function Swiper({ children, data }) {
  const [curActive, setCurActive] = useState(0);
  const intervalRef = useRef(null);
  const swiperRef = useRef(null);
  const filteredData = data.map(({ id, image, title }) => ({
    id,
    image,
    title,
  }));
  const handleRightSlide = useCallback(() => {
    setCurActive((prevActive) => (prevActive + 1) % filteredData.length);
  }, [filteredData.length]);
  const handleLeftSlide = () => {
    setCurActive(
      (prevActive) =>
        (prevActive - 1 + filteredData.length) % filteredData.length
    );
  };

  const handleDotClick = (idx) => {
    setCurActive(idx);
  };
  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(handleRightSlide, 2500);
  }, [handleRightSlide]);
  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide]);

  useEffect(() => {
    const swiperElement = swiperRef.current;
    if (swiperElement) {
      swiperElement.addEventListener("mouseenter", stopAutoSlide);
      swiperElement.addEventListener("mouseleave", startAutoSlide);

      return () => {
        swiperElement.removeEventListener("mouseenter", stopAutoSlide);
        swiperElement.removeEventListener("mouseleave", startAutoSlide);
      };
    }
  }, [startAutoSlide]);

  // Context value containing state and functions
  const contextValue = {
    curActive,
    filteredData,
    handleLeftSlide,
    handleRightSlide,
    handleDotClick,
  };
  return (
    <SwiperContext.Provider value={contextValue}>
      <div
        ref={swiperRef}
        className="flex h-[400px] sm:h-[450px] lg:h-[550px] w-full max-w-[900px]"
      >
        <div className="relative w-full h-full">{children}</div>
      </div>
    </SwiperContext.Provider>
  );
}
function Slides() {
  const { curActive, filteredData } = useContext(SwiperContext);
  return (
    <>
      {filteredData.map((product, idx) => (
        <div
          key={product.id}
          className={`${
            curActive === idx
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 pointer-events-none scale-75"
          } flex flex-1 absolute w-full h-full overflow-hidden rounded-[20px] shadow-sm shadow-gray-300 transition-all duration-500 ease-in-out`}
        >
          <img src={product.image} alt="product/image" className="w-full " />
          <div className="absolute w-full h-full bg-black/50 flex py-[40px] px-[20px] sm:py-[40px] sm:px-[30px] items-start sm:items-end text-[20px] sm:text-[30px] text-center">
            <h2 className="text-white/50 sm:text-white">{product.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
function LeftButton() {
  const { handleLeftSlide } = useContext(SwiperContext);
  return (
    <div
      onClick={handleLeftSlide}
      className="absolute w-[15px] h-[15px] sm:w-[30px] sm:h-[30px] rounded-full cursor-pointer text-[30px] sm:text-[40px] top-[50%] left-[15px] flex justify-center bg-gray-200 items-center"
    >
      &lsaquo;
    </div>
  );
}
function RightButton() {
  const { handleRightSlide } = useContext(SwiperContext);
  return (
    <div
      onClick={handleRightSlide}
      className="absolute w-[15px] h-[15px] sm:w-[30px] sm:h-[30px] rounded-full cursor-pointer text-[30px] sm:text-[40px] top-[50%] right-[15px] flex justify-center bg-gray-200 items-center"
    >
      &rsaquo;
    </div>
  );
}
function Dots() {
  const { curActive, filteredData, handleDotClick } = useContext(SwiperContext);
  return (
    <div className="absolute bottom-[10px] left-[50%] translate-x-[-50%] flex">
      {filteredData.map((_, idx) => (
        <div
          key={idx}
          onClick={() => handleDotClick(idx)}
          className={`${
            curActive === idx ? "bg-blue-400" : ""
          } h-[5px] w-[5px] sm:h-[10px] sm:w-[10px] bg-[#f5f5f5] rounded-full cursor-pointer ml-[10px] hover:scale-[1.4]`}
        ></div>
      ))}
    </div>
  );
}
Swiper.Slides = Slides;
Swiper.LeftButton = LeftButton;
Swiper.RightButton = RightButton;
Swiper.Dots = Dots;
export default Swiper;
