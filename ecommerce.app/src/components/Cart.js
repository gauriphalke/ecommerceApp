import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decrementQty } from '../redux/cartSlice';
import './Cart.css'; 


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };


  const total = useMemo(() => getTotal(), [cartItems]);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button
                  className="qty-button"
                  onClick={() => dispatch(decrementQty(item.id))}
                  disabled={item.qty === 1}
                >
                  -
                </button>
                <span className="qty">{item.qty}</span>
                <button
                  className="qty-button"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>
              </div>
              <button
                className="remove-button"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="total">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
