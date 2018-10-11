import React from 'react';

import { Link } from 'react-router-dom';
import './Store.css';
import SimpleModal from '../SImpleModal/SimpleModal';


const Navbar = () => (
  <div className="App">
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">E Commerce</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="store">Today's Deals</a></li>
              
              <li className="nav-item active">
                  <SimpleModal/>
              </li>
              <li className="active">
              <Link
                to="/Inventory"
                className={
                  window.location.pathname === "/Inventory" ? "nav-link active" : "nav-link"
                }
              >
                Inventory
              </Link>
            </li>
      <li className="active">
              <Link
                to="/production"
                className={
                  window.location.pathname === "/production" ? "nav-link active" : "nav-link"
                }
                >
                Product List
              </Link>
            </li>
            </ul>
          </div>
        </nav>

  </div>
  );
  
  export default Navbar;
