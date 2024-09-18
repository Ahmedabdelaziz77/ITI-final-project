import { useState, useEffect } from "react";

function useFetchProduct(id) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:8000/products/${id}`);
        if (!res.ok) throw new Error("Error While Fetching The Data");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  return { product, isLoading, error };
}

export default useFetchProduct;
