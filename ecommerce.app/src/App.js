import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';


import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Checkout from './components/Checkout';
import Wishlist from './components/Wishlist';


import './App.css';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Header with Navigation */}
        <Header user={user} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />

        </Routes>
        <Footer />
        <Routes>
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

