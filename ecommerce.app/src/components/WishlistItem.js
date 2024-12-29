import React from 'react';
import './WishlistItem.css'; // Import traditional CSS styles

const WishlistItem = React.memo(({ item, addToCart, removeFromWishlist }) => (
  <li className="wishlist-item">
    <img
      src={item.image || 'default-image.jpg'}
      alt={item.title || 'Product Image'}
      className="wishlist-image"
    />
    <div className="wishlist-details">
      <h3>{item.title || 'Unknown Product'}</h3>
      <p>${item.price?.toFixed(2) || 'N/A'}</p>
    </div>
    <div className="wishlist-actions">
      <button
        onClick={() => addToCart(item)}
        aria-label={`Add ${item.title || 'product'} to Cart`}
      >
        Add to Cart
      </button>
      <button
        onClick={() => removeFromWishlist(item)}
        aria-label={`Remove ${item.title || 'product'} from Wishlist`}
      >
        Remove
      </button>
    </div>
  </li>
));

export default WishlistItem;
