import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function usePostProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const addProduct = async (product) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const result = await response.json();
      navigate(`/dashboard`);
      return result;
    } catch (err) {
      setError(err.message);
      console.error("Error adding product:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { addProduct, isLoading, error };
}
