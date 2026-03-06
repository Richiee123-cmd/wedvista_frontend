import { BrowserRouter, Routes, Route } from "react-router-dom";

// USER PAGES
import Home from "./pages/Home/Home";
import Services from "./pages/services/Services";
import BudgetPlanner from "./pages/BudgetPlanner/BudgetPlanner";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import About from "./pages/Aboutus/Aboutus";
import ServiceVendors from "./pages/ServiceVentors/ServiceVentors";
import GuestManagement from "./pages/GuestManagement/GuestManagement";
import Contact from "./pages/Contact/Contact";
import UserBookings from "./pages/ServiceVentors/UserBookings";
import UserBooking from "./pages/ServiceVentors/UserBooking";
import PaymentSuccess from "./pages/PaymentSuccess";

// ADMIN
import AdminLogin from "./Admin/Pages/AdminLogin";
import AdminDashboard from "./Admin/Pages/Dashboard";
import Users from "./Admin/Pages/User";
import Vendors from "./Admin/Pages/Vendors";
import ProtectedAdminRoute from "./Admin/Components/ProtectedAdminRoute";

// VENDOR
import VendorLogin from "./Vendors/Pages/VendorLogin";
import VendorPending from "./Vendors/Pages/VendorPending";
import VendorRegister from "./Vendors/Pages/VendorRegister";
import VendorDashboard from "./Vendors/Pages/VendorDashboard";
import VendorServices from "./Vendors/Pages/VendorServices";
import VendorBookings from "./Vendors/Pages/VendorBookings";
import VendorProfile from "./Vendors/Pages/VendorProfile";
import ProtectedVendorRoute from "./Vendors/Components/ProtectedVendorRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
       
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guests" element={<GuestManagement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/book" element={<UserBooking />} />
       <Route path="/services/:type" element={<ServiceVendors />} />
       <Route path="/my-bookings" element={<UserBookings />} />
        <Route path="/book" element={<UserBooking />} />
        <Route path="/payment-success/:id" element={<PaymentSuccess />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route


          path="/admin/dashboard"
          element={
            
              <AdminDashboard />
           
          }
        />

        <Route
          path="/admin/users"
          element={
           
              <Users />
          
          }
        />

        <Route
          path="/admin/vendors"
          element={
            
              <Vendors />
            
          }
        />

        {/* VENDOR ROUTES */}
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/pending" element={<VendorPending />} />
        <Route
          path="/vendor/dashboard" element={<VendorDashboard /> } />

        <Route
          path="/vendor/services"
          element={
            
              <VendorServices />
            
          }
        />

        <Route
          path="/vendor/bookings"
          element={
            
              <VendorBookings />
           
          }
        />

        <Route
          path="/vendor/profile"
          element={
            
              <VendorProfile />
            
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
