import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PagesNotFound from "./components/PageNotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const OtherProducts = lazy(() => import("./pages/OtherProducts"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Form = lazy(() => import("./pages/Form"));
const Registration = lazy(() => import("./pages/Registeration"));
const UsersDashboard = lazy(() => import("./pages/UsersDashboard"));

function AppContent() {
  const location = useLocation();
  const isRegistrationPage =
    location.pathname === "/" || location.pathname === "/registration";

  return (
    <ProtectedRoute>
      {!isRegistrationPage && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
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
