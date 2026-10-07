import StatCard from "../../components/dashboard/StatCard";
import RecentProducts from "../../components/dashboard/RecentProducts";
import LowStockProducts from "../../components/dashboard/LowStockProducts";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back to LCC Warehouse</p>
        </div>

        <button className="add-product-btn">
          + Add Product
        </button>
      </div>

      <div className="stats-grid">

        <StatCard
          title="Total Products"
          value="1,250"
          icon="📦"
        />

        <StatCard
          title="Total Stock"
          value="25,450"
          icon="📊"
        />

        <StatCard
          title="Low Stock"
          value="18"
          icon="⚠️"
        />

        <StatCard
          title="Categories"
          value="25"
          icon="🏷️"
        />

      </div>

      <div className="dashboard-grid">

        <RecentProducts />

        <LowStockProducts />

      </div>

    </div>
  );
}

export default Dashboard;