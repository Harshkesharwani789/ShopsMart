import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${apiUrl}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>ShopSmart</h1>
        <div className="cart-icon">🛒 Cart</div>
      </nav>
      <main className="container">
        <header>
          <h2>Featured Products</h2>
        </header>

        {loading && <p>Loading products...</p>}
        {error && <p>Error loading products: {error}</p>}

        {!loading && !error && (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
