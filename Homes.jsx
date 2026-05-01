import React from "react";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Shoes",
    price: "₹1499",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹999",
    image: "https://via.placeholder.com/200",
  },
];

const Home = () => {
  return (
    <div className="home">
      
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">ShopEase</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Big Sale is Live 🔥</h1>
        <p>Up to 50% off on all products</p>
        <button className="shop-btn">Shop Now</button>
      </section>

      {/* Product Section */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
