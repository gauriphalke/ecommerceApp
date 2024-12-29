import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import WishlistItem from './WishlistItem'; // Import the memoized component
import './Wishlist.css'; // Import traditional CSS styles

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty. Start adding items you love!</p>
        </div>
      ) : (
        <ul className="wishlist-items">
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              addToCart={(item) => dispatch(addToCart(item))}
              removeFromWishlist={(item) => dispatch(removeFromWishlist(item))}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
