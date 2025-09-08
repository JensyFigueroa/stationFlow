import SimpleLayout from "../../layout/simple-layout";
import { useSelector } from "react-redux";
import Authenticated from "../auth-hooks/Authenticated";
import type { AuthState } from "../../redux/slices/auth";
import HasRole from "../auth-hooks/HasRole";

import { ResponsivePieCanvas } from '@nivo/pie';
import { ResponsiveLine } from "@nivo/line";

import data from '../../data/data.json';
import styles from './index.module.css';

// ** Employee | Lead Employee
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
// Line Summary
// Orders Summary
// Orders Delivered per Week

const Dashboard = () => {
  const auth: AuthState = useSelector((state: any) => state.auth);

  return (
    <Authenticated>
      <SimpleLayout>
        <HasRole role="admin">
          <div>
            <div>
              <div className="badge text-bg-secondary mb-5">There is currently 197 users logged in...</div>
            </div>
            <div className={styles.ChartContainer}>
              <div className="card p-3">
                <div style={{width: 600, height: 400}}>
                  <div className="fw-bold mb-2">Truck Delivered this Month</div>
                  <ResponsivePieCanvas 
                    data={data.reports.lineReport}
                    margin={{ top: 40, right: 200, bottom: 40, left: 120 }}
                    legends={[
                      {
                          anchor: 'right',
                          direction: 'column',
                          translateX: 140,
                          itemsSpacing: 2,
                          itemWidth: 60,
                          itemHeight: 16
                      }
                  ]} />
                </div>
              </div>
              <div className="card p-3 h-100" style={{width: 600, height: 400}}>
                <div className="fw-bold mb-2">Truck Delivered daily</div>
                <ResponsiveLine
                
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }} 
                  data={data.reports.lineReportDaily}
                  useMesh={true}
                  enableSlices="x"
                  legends={[
                      {
                          anchor: 'bottom-right',
                          direction: 'column',
                          translateX: 100,
                          itemWidth: 80,
                          itemHeight: 22,
                          symbolShape: 'circle'
                      }
                  ]} />
              </div>
            </div>
          </div>
        </HasRole>
        <HasRole role="worker">
          <h1>Employee Dashboard</h1>
        </HasRole>
        <HasRole role="lead-worker">
          <h1>Lead Employee Dashboard</h1>
        </HasRole>
        <HasRole role="Supervisor">
          <h1>Lead Employee Dashboard</h1>
        </HasRole>
      </SimpleLayout>
    </Authenticated>
  );
};

export default Dashboard;