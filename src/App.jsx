import './App.css';

const summaryCards = [
  {
    title: 'Total Revenue',
    value: '$48,295',
    change: '↑ 12.5% vs last month',
    trend: 'up',
    icon: '💰',
    colorClass: 'revenue',
  },
  {
    title: 'Orders',
    value: '1,284',
    change: '↑ 8.2% vs last month',
    trend: 'up',
    icon: '🛒',
    colorClass: 'orders',
  },
  {
    title: 'Customers',
    value: '3,741',
    change: '↑ 5.1% vs last month',
    trend: 'up',
    icon: '👥',
    colorClass: 'customers',
  },
  {
    title: 'Products',
    value: '256',
    change: '↓ 2 vs last month',
    trend: 'down',
    icon: '📦',
    colorClass: 'products',
  },
];

const recentOrders = [
  { id: '#ORD-0091', customer: 'Alice Johnson', product: 'Wireless Headphones', date: 'Mar 10, 2026', amount: '$129.99', status: 'completed' },
  { id: '#ORD-0090', customer: 'Bob Martinez',  product: 'Smart Watch',         date: 'Mar 9, 2026',  amount: '$249.00', status: 'shipped'    },
  { id: '#ORD-0089', customer: 'Carol White',   product: 'Laptop Stand',         date: 'Mar 9, 2026',  amount: '$45.50',  status: 'processing' },
  { id: '#ORD-0088', customer: 'David Lee',     product: 'USB-C Hub',            date: 'Mar 8, 2026',  amount: '$39.99',  status: 'completed'  },
  { id: '#ORD-0087', customer: 'Eva Brown',     product: 'Mechanical Keyboard',  date: 'Mar 8, 2026',  amount: '$89.00',  status: 'cancelled'  },
  { id: '#ORD-0086', customer: 'Frank Davis',   product: 'Webcam 4K',            date: 'Mar 7, 2026',  amount: '$175.00', status: 'shipped'    },
];

const topProducts = [
  { name: 'Wireless Headphones', sales: '342 sold', emoji: '🎧' },
  { name: 'Smart Watch',         sales: '298 sold', emoji: '⌚' },
  { name: 'Laptop Stand',        sales: '201 sold', emoji: '💻' },
  { name: 'Mechanical Keyboard', sales: '187 sold', emoji: '⌨️' },
  { name: 'USB-C Hub',           sales: '156 sold', emoji: '🔌' },
];

const navItems = [
  { icon: '📊', label: 'Dashboard', active: true  },
  { icon: '🛒', label: 'Orders',    active: false },
  { icon: '📦', label: 'Products',  active: false },
  { icon: '👥', label: 'Customers', active: false },
  { icon: '📈', label: 'Analytics', active: false },
  { icon: '⚙️', label: 'Settings',  active: false },
];

function App() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>🛍️ Commerce</h2>
          <span>Dashboard</span>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-section-title">Main Menu</div>
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item${item.active ? ' active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="main">
        {/* Top bar */}
        <header className="topbar">
          <h1>Overview</h1>
          <div className="topbar-right">
            <span className="topbar-date">{today}</span>
            <div className="avatar">AD</div>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          {/* Summary cards */}
          <div className="summary-cards">
            {summaryCards.map((card) => (
              <div key={card.title} className="card">
                <div className="card-header">
                  <span className="card-title">{card.title}</span>
                  <span className={`card-icon ${card.colorClass}`}>{card.icon}</span>
                </div>
                <div className="card-value">{card.value}</div>
                <div className={`card-change ${card.trend}`}>{card.change}</div>
              </div>
            ))}
          </div>

          {/* Recent orders */}
          <section className="section">
            <div className="section-header">
              <h2>Recent Orders</h2>
              <button className="view-all">View all →</button>
            </div>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>{order.date}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status-badge ${order.status}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Top products */}
          <section className="section">
            <div className="section-header">
              <h2>Top Products</h2>
              <button className="view-all">View all →</button>
            </div>
            <div className="products-grid">
              {topProducts.map((product) => (
                <div key={product.name} className="product-item">
                  <span className="product-emoji">{product.emoji}</span>
                  <div className="product-name">{product.name}</div>
                  <div className="product-sales">{product.sales}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
