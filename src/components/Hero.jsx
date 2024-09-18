import { Link } from "react-router-dom";
import WomanHero from "../img/woman_hero.png";
function Hero() {
  return (
    <section className=" h-[800px] bg-hero bg-no-repeat bg-cover py-24 bg-center">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMANS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden md:block">
          <img src={WomanHero} alt="bg-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
