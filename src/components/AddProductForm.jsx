import { useCallback, useEffect, useState } from "react";
import FormRowVertical from "./FormRowVertical";
import Input from "./Input";
import { generateRandomId } from "../utils/helpers";
import { usePostProduct } from "../services/usePostProduct"; // Import update function
import { Link, useParams } from "react-router-dom";
import SpinnerFullPage from "./SpinnerFullPage";
import useFetchProduct from "../services/useFetchProduct";
import { useUpdateProduct } from "../services/useUpdateProduct";
function AddProductForm() {
  const { id: productId } = useParams();
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    price: 0,
    category: "",
    image: "",
    rating: 0,
    count: 0,
  });
  const { product, isLoading: isLoadingProduct } = useFetchProduct(productId);
  const { addProduct, isLoading, error } = usePostProduct();
  const { updateProduct, isUpdating } = useUpdateProduct();

  // Initialize formData when product is fetched
  useEffect(() => {
    if (product) {
      setFormData({
        id: product.id,
        title: product.title || "",
        price: product.price || 0,
        category: product.category || "",
        image: product.image || "",
        rating: product.rating.rate || 0,
        count: product.rating.count || 0,
      });
    }
  }, [product]);

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }, []);

  function reset() {
    setFormData({
      id: null,
      title: "",
      price: 0,
      category: "",
      image: "",
      rating: 0,
      count: 0,
    });
  }

  // Handle form submission (adding a product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: generateRandomId(),
    };
    await addProduct(newProduct);
    reset();
  };

  // Handle product update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: formData.id,
      category: formData.category,
      rating: {
        count: formData.count,
        rate: formData.rating,
      },
      price: formData.price,
      image: formData.image,
      title: formData.title,
    };
    console.log(updatedProduct);
    try {
      await updateProduct(productId, updatedProduct);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (isLoadingProduct || isUpdating) return <SpinnerFullPage />;
  if (error) return <div>Error loading product: {error}</div>;
  return (
    <form
      onSubmit={productId ? handleUpdate : handleSubmit}
      className="py-[1.4rem] sm:py-[2.4rem] px-[1rem] sm:px-[4rem] bg-[#fff] border-solid border-[1px] border-gray-100 shadow-md overflow-hidden text-[0.5rem] sm:text-[1.4rem]"
    >
      <FormRowVertical label="Category">
        <Input
          type="text"
          id="category"
          value={formData.category}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Count">
        <Input
          type="number"
          id="count"
          value={formData.count}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Price">
        <Input
          type="number"
          id="price"
          value={formData.price}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Rating">
        <Input
          type="number"
          id="rating"
          value={formData.rating}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Image">
        <Input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Title">
        <Input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <span></span>
        <div className="flex flex-row gap-14">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-600 to-black text-[#fff] rounded-md py-[0.8rem] px-[1.6rem] text-[1rem] sm:text-[1.6rem] font-semibold w-full shadow-lg hover:from-blue-500 hover:to-gray-800 transition-all duration-200 "
          >
            {productId ? "Update" : "Add Product"}
          </button>
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-blue-600 to-black text-[#fff] rounded-md py-[0.8rem] px-[1.6rem] text-[1rem] sm:text-[1.6rem] font-semibold w-full shadow-lg hover:from-blue-500 hover:to-gray-800 transition-all duration-200 text-center"
          >
            Back
          </Link>
        </div>
      </FormRowVertical>
    </form>
  );
}

export default AddProductForm;
