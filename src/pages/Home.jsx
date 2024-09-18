import { useEffect } from "react";

import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import SpinnerFullPage from "../components/SpinnerFullPage";
import { fetchProducts } from "../redux/actions/productActions";
import Products from "../components/Products";
function Home() {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) return <SpinnerFullPage />;
  const humanProducts = products.filter(
    (product) =>
      product?.category === "men's clothing" ||
      product?.category === "women's clothing"
  );

  return (
    <div className="max-w-[1320px] mx-auto">
      <Hero />
      <Products filteredProducts={humanProducts} />
    </div>
  );
}

export default Home;
