import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useDeleteProduct() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const deleteProduct = async (id) => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product.");
      }
      window.location.reload();
    } catch (err) {
      setError(err.message || "Unknown error occurred during deletion.");
      console.error("Error deleting product:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteProduct, isDeleting, error };
}
