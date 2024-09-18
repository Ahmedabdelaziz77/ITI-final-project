import { useState } from "react";

export function useUpdateProduct() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const updateProduct = async (productId, updatedProduct) => {
    setIsUpdating(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:8000/products/${productId}`,
        {
          method: "PUT", // or "PATCH" if you only want to update specific fields
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the product");
      }

      const updatedData = await response.json();
      return updatedData;
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateProduct, isUpdating, error };
}
