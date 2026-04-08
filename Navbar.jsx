import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3; // change dynamically later

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ShopEasy
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Products</li>
          <li className="hover:text-blue-600 cursor-pointer">Deals</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border rounded-lg px-2">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none px-2 py-1"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          </div>

          {/* User */}
          <User className="cursor-pointer" />

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 font-medium">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Products</span>
          <span className="cursor-pointer">Deals</span>
          <span className="cursor-pointer">Contact</span>

          {/* Mobile Search */}
          <div className="flex items-center border rounded-lg px-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 py-1 w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;