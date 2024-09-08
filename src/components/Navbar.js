import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>AgriPlatform</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/consumer-dashboard">Consumers</Link>
        </li>
        <li>
          <Link to="/farmer-dashboard">Farmers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
