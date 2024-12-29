import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (category === '' || product.category === category)
      ),
    [products, searchTerm, category]
  );

  return (
    <div className="product-list">
      {loading ? (
        <p className="loading-message">Loading products...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <>
          <div className="filters">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search products"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
            </select>
          </div>
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <div className="product-actions">
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      aria-label={`Add ${product.title} to cart`}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => dispatch(addToWishlist(product))}
                      aria-label={`Add ${product.title} to wishlist`}
                    >
                      Wishlist
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>No products found</p>
                <img
                  src="https://via.placeholder.com/150"
                  alt="No products found"
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
