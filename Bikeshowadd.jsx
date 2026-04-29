import React from "react";
import "./Bikeshow.css";

const bikes = [
  {
    id: 1,
    name: "Royal Enfield Classic 350",
    price: "₹1.9L",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c3",
  },
  {
    id: 2,
    name: "KTM Duke 390",
    price: "₹3.1L",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
  },
  {
    id: 3,
    name: "Yamaha R15",
    price: "₹1.8L",
    img: "https://images.unsplash.com/photo-1619778724566-7d1cf8b17826",
  },
  {
    id: 4,
    name: "BMW G310R",
    price: "₹2.9L",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
  },
];

const Bikeshow = () => {
  return (
    <div className="bike-container">
      <h2 className="title">🔥 Bike Collection</h2>

      <div className="bike-grid">
        {bikes.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.img} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikeshow;
