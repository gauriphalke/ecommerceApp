import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Header = ({ user }) => {
  const handleLogout = async () => {
    await auth.signOut();
    alert('Logged out successfully');
  };

  return (
    <nav className="header">
      <h1>E-Commerce App</h1>
      <div>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/checkout">Payment</Link>
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/auth">Login</Link>
          
        )}
      </div>
    </nav>
  );
};

export default Header;
