import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const Menubar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-600">ShopEasy</h1>

        <ul className="hidden md:flex gap-6">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          <ShoppingCart />
          <div onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          <span>Home</span>
          <span>Products</span>
          <span>Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Menubar;










import React from "react";

const products = [
  { id: 1, name: "Shoes", price: "₹999" },
  { id: 2, name: "Watch", price: "₹1999" },
  { id: 3, name: "Bag", price: "₹799" },
];

const Home = () => {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6 text-center">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg"
          >
            <img
              src="https://via.placeholder.com/200"
              alt="product"
              className="mb-3"
            />

            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.price}</p>

            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;