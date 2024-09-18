import Table from "./Table";
import { formatCurrency } from "../utils/helpers";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Menus from "./Menus";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteProduct } from "../services/useDeleteProducts";
import SpinnerFullPage from "./SpinnerFullPage";
function ProductRow({ product }) {
  const { id: productId, category, image, rating, price } = product;
  const { deleteProduct, isDeleting, error } = useDeleteProduct();

  const navigate = useNavigate();
  if (isDeleting) return <SpinnerFullPage />;
  return (
    <Table.Row>
      <img src={image} alt="product/image" />
      <div>{category}</div>
      <div>{rating?.count}</div>
      <div>{formatCurrency(price)}</div>
      <div>{rating?.rate}</div>
      <Menus>
        <Menus.Menu>
          <Menus.Toggle id={productId} />
          <Menus.List id={productId}>
            <Menus.Button
              icon={
                <HiArrowTopRightOnSquare className="h-5 w-5 text-gray-600" />
              }
              onClick={() => navigate(`/product/${productId}`)}
            >
              view
            </Menus.Button>
            <Menus.Button
              icon={
                <MdOutlineSystemUpdateAlt className="h-5 w-5 text-gray-600" />
              }
              onClick={() => navigate(`/dashboard/form/${productId}`)}
            >
              Update
            </Menus.Button>
            <Menus.Button
              icon={<AiOutlineDelete className="h-5 w-5 text-gray-600" />}
              onClick={() => deleteProduct(productId)}
            >
              Delete
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </Menus>
    </Table.Row>
  );
}

export default ProductRow;
