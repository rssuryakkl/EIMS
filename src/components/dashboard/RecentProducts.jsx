import "./RecentProducts.css";

const products = [
  {
    id: 1,
    name: "Cotton Bedsheet",
    category: "Textile",
    quantity: 200,
  },
  {
    id: 2,
    name: "Silk Saree",
    category: "Clothing",
    quantity: 150,
  },
  {
    id: 3,
    name: "Cotton Shirt",
    category: "Clothing",
    quantity: 300,
  },
  {
    id: 4,
    name: "Sunflower Oil",
    category: "Grocery",
    quantity: 500,
  },
];

function RecentProducts() {
  return (
    <div className="dashboard-section">
      <div className="section-header">
        <h3>Recent Products</h3>
        <button>View All</button>
      </div>

      <div className="product-table">
        <div className="table-header">
          <span>Product</span>
          <span>Category</span>
          <span>Quantity</span>
        </div>

        {products.map((product) => (
          <div className="table-row" key={product.id}>
            <span>{product.name}</span>
            <span>{product.category}</span>
            <span>{product.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;