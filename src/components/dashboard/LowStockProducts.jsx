import "./LowStockProducts.css";

const lowStockProducts = [
  {
    id: 1,
    name: "Sunflower Oil",
    quantity: 15,
  },
  {
    id: 2,
    name: "Rice",
    quantity: 10,
  },
  {
    id: 3,
    name: "Bath Soap",
    quantity: 8,
  },
];

function LowStockProducts() {
  return (
    <div className="dashboard-section">
      <div className="section-header">
        <h3>Low Stock</h3>
        <button>View All</button>
      </div>

      <div className="low-stock-list">
        {lowStockProducts.map((product) => (
          <div className="low-stock-item" key={product.id}>
            <div>
              <h4>{product.name}</h4>
              <p>Only {product.quantity} left</p>
            </div>

            <span className="low-stock-badge">
              Low
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LowStockProducts;