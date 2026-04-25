import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to MyApp</h2>
          <p>Your one-stop solution for modern web experiences.</p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Optimized for speed and performance.</p>
          </div>
          <div className="feature-card">
            <h3>Secure</h3>
            <p>Top-notch security features included.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Looks great on all devices.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h4>Web Development</h4>
            <p>Modern and scalable web apps.</p>
          </div>
          <div className="service-item">
            <h4>UI/UX Design</h4>
            <p>Clean and user-friendly interfaces.</p>
          </div>
          <div className="service-item">
            <h4>SEO Optimization</h4>
            <p>Boost your online visibility.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"Amazing service and support!"</p>
            <h5>- John Doe</h5>
          </div>
          <div className="testimonial">
            <p>"Highly recommend this platform."</p>
            <h5>- Jane Smith</h5>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Ready to get started?</h2>
        <button className="btn-secondary">Join Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h4>MyApp</h4>
            <p>Building the future of web.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: support@myapp.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <p className="footer-bottom">© 2026 MyApp. All rights reserved.</p>
      </footer>

      {/* Styles (inline for demo) */}
      <style jsx>{`
        .home-container {
          font-family: Arial, sans-serif;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 15px 30px;
          background: #222;
          color: #fff;
        }
        .nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
        }
        .hero {
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }
        .btn-primary {
          padding: 10px 20px;
          background: #fff;
          color: #333;
          border: none;
          cursor: pointer;
          margin-top: 10px;
        }
        .features {
          padding: 60px 20px;
          text-align: center;
        }
        .feature-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }
        .feature-card {
          padding: 20px;
          border: 1px solid #ddd;
          width: 200px;
        }
        .services {
          background: #f9f9f9;
          padding: 60px 20px;
          text-align: center;
        }
        .service-list {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .service-item {
          width: 200px;
        }
        .testimonials {
          padding: 60px 20px;
          text-align: center;
        }
        .testimonial-cards {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .testimonial {
          border: 1px solid #ddd;
          padding: 20px;
          width: 250px;
        }
        .cta {
          background: #333;
          color: white;
          padding: 50px 20px;
          text-align: center;
        }
        .btn-secondary {
          padding: 10px 20px;
          background: #00f2fe;
          border: none;
          cursor: pointer;
        }
        .footer {
          background: #222;
          color: white;
          padding: 40px 20px;
        }
        .footer-content {
          display: flex;
          justify-content: space-around;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Home;
