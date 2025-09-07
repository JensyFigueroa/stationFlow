import SimpleLayout from "../../layout/simple-layout";
import { useSelector } from "react-redux";
import Authenticated from "../auth-hooks/Authenticated";
import type { AuthState } from "../../redux/slices/auth";

// ** Employee
// Recent Added Gigs
// Pie Status Gigs per Order
// Assigned Gigs

// ** QC
// Add Gigs to Orders
// Pie Status Gigs per Order

// ** Supervisor
// Stations Summary
// Orders Summary
// Orders Delivered per Week

// ** Manager | Owner
// Groups Summary
// Groups Delivered per 

// ** Admin
// Users Summary
// Stations Summary
// Orders Summary
// Orders Delivered per Week

const Dashboard = () => {
  const auth: AuthState = useSelector((state: any) => state.auth);

  return (
    <Authenticated>
      <SimpleLayout>
        <h1>Dashboard Page</h1>
      </SimpleLayout>
    </Authenticated>
  );
};

export default Dashboard;