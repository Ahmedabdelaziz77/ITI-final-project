import Table from "../components/Table";
import Empty from "../components/Empty";
import Pagination from "../components/Pagination";
import SpinnerFullPage from "../components/SpinnerFullPage";
import useFetchProducts from "../services/useFetchProducts";
import ProductRow from "../components/ProductRow";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
function Dashboard() {
  const { products, isLoading, limit, skip } = useFetchProducts();
  const { user } = useAuth();
  if (isLoading) return <SpinnerFullPage />;
  if (!products.length) return <Empty resource="products" />;
  const newProducts = products.slice(skip, skip + limit);
  const count = products.length;
  return (
    <div className="pt-32 pb-12 lg:py-32 h-[150vh] flex  justify-start">
      <div className="max-w-[1300px] mx-auto">
        <div className="container mx-auto w-full">
          {user?.role !== "admin" ? (
            <div>you not an admin</div>
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center">
              <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
                <Table.Header>
                  <div></div>
                  <div>Category</div>
                  <div>Count</div>
                  <div>Price</div>
                  <div>Rating</div>
                  <div></div>
                </Table.Header>
                <Table.Body
                  data={newProducts}
                  render={(product) => (
                    <ProductRow product={product} key={product.id} />
                  )}
                />
                <Table.Footer>
                  <Pagination count={count} />
                </Table.Footer>
              </Table>
              <div className="mt-5">
                <Link
                  to="form"
                  className="bg-gradient-to-r from-pink-500 to-pink-300 text-white font-semibold  rounded-full shadow-lg hover:from-pink-300 hover:to-pink-500 hover:shadow-xl transition-all duration-300 py-2 px-6 "
                >
                  Add New Product
                </Link>
              </div>
              <div className="mt-5">
                <Link
                  to="users"
                  className="bg-gradient-to-r from-pink-500 to-pink-300 text-white font-semibold  rounded-full shadow-lg hover:from-pink-300 hover:to-pink-500 hover:shadow-xl transition-all duration-300 py-2 px-6 "
                >
                  Show Users Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
