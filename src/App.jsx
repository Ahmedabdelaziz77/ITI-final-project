import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import OtherProducts from "./pages/OtherProducts";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PagesNotFound from "./components/PageNotFound";
import Form from "./pages/Form";
import Registration from "./pages/Registeration";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersDashboard from "./pages/UsersDashboard";

function AppContent() {
  const location = useLocation();
  const isRegistrationPage =
    location.pathname === "/" || location.pathname === "/registration";

  return (
    <ProtectedRoute>
      {!isRegistrationPage && <Header />}
      <Routes>
        <Route index element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<OtherProducts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/form" element={<Form />} />
        <Route path="/dashboard/form/:id" element={<Form />} />
        <Route path="/dashboard/users" element={<UsersDashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
      {!isRegistrationPage && <Sidebar />}
      {!isRegistrationPage && <Footer />}
    </ProtectedRoute>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
