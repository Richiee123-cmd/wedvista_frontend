import { useEffect, useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getDashboardStatsAPI } from "../../Service/allAPIs";
import "../Admin.css";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getDashboardStatsAPI();
        setStats(res.data);
      } catch (error) {
        alert("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const chartData = stats
    ? [
        { name: "Users", count: stats.users },
        { name: "Vendors", count: stats.vendors },
        { name: "Bookings", count: stats.bookings },
        { name: "Complaints", count: stats.complaints },
      ]
    : [];

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">
        <h1 className="page-title">Admin Dashboard</h1>

        {loading ? (
          <p>Loading dashboard...</p>
        ) : (
          <>
            {/* STATS */}
            <div className="stats-grid">
              <div className="stat-card">
                👥 <span>{stats.users}</span>
                <p>Total Users</p>
              </div>

              <div className="stat-card">
                🏪 <span>{stats.vendors}</span>
                <p>Total Vendors</p>
              </div>

              <div className="stat-card">
                📦 <span>{stats.bookings}</span>
                <p>Total Bookings</p>
              </div>

              <div className="stat-card">
                📩 <span>{stats.complaints}</span>
                <p>Total Complaints</p>
              </div>
            </div>

            {/* CHART */}
            <div className="chart-box">
              <h2>Platform Overview</h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    fill="#8b5cf6"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
