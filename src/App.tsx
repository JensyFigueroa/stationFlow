import { Route, Routes } from "react-router";
import "./App.css";

// Pages
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import OrdersPage from "./pages/orders";
import StationsPage from "./pages/stations";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/stations" element={<StationsPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}
export default App