import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
    <ul className="nav nav-tabs">
      
      <li className="nav-item">
        <Link
          to="/newuser"
          className={
            window.location.pathname === "/newuser" ? "nav-link active" : "nav-link"
          }
        >
          New User
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/production"
          className={
            window.location.pathname === "/production" ? "nav-link active" : "nav-link"
          }
        >
          Production
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Inventory"
          className={
            window.location.pathname === "/Inventory" ? "nav-link active" : "nav-link"
          }
        >
          Inventory
        </Link>
      </li>
    </ul>
  );
  
  export default Navbar;
  