import React from "react";
import "./Homepage.css";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    img: "https://via.placeholder.com/300x400",
  },
  {
    id: 2,
    title: "Interstellar",
    img: "https://via.placeholder.com/300x400",
  },
  {
    id: 3,
    title: "Joker",
    img: "https://via.placeholder.com/300x400",
  },
  {
    id: 4,
    title: "Leo",
    img: "https://via.placeholder.com/300x400",
  },
];

const Homepage = () => {
  return (
    <div className="home">
      <header className="navbar">
        <h1 className="logo">MovieZone</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Trending</li>
          <li>Top Rated</li>
          <li>Contact</li>
        </ul>
      </header>

      <section className="hero">
        <h2>Welcome to MovieZone 🎬</h2>
        <p>Watch your favorite movies anytime</p>
        <button className="btn">Explore Now</button>
      </section>

      <section className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Homepage;

/* Homepage.css */

.home {
  font-family: Arial, sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #111;
  color: #fff;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links li {
  cursor: pointer;
  transition: 0.3s;
}

.nav-links li:hover {
  color: #f39c12;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(to right, #000, #333);
  color: #fff;
  animation: fadeIn 1.5s ease-in-out;
}

.btn {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  background: #f39c12;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #e67e22;
}

.movies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: #222;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  animation: slideUp 0.8s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero h2 {
    font-size: 22px;
  }
}
