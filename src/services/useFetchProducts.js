import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const limit = PAGE_SIZE,
    skip = (currentPage - 1) * PAGE_SIZE;
  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res1 = await fetch(`http://localhost:8000/products`);
        if (!res1.ok) throw new Error("Error While Fetching The Data");
        const data1 = await res1.json();
        setProducts(data1);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return { products, isLoading, error, limit, skip };
}

export default useFetchProducts;
