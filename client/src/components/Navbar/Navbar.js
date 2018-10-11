import React from 'react';

import { Link } from 'react-router-dom';
import Main from '../../Main';
import './Navbar.css';
import SimpleModal from '../SImpleModal/SimpleModal';
import SimpleModal2 from '../SImpleModal/SimpleModal2';
// import Store from '../StoreItems/Store';


const Navbar = () => (
  <div className="App">
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">E Commerce</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
              <Link
                to="/Store"
                className={
                  window.location.pathname === "/Store" ? "nav-link active" : "nav-link"
                }
              >
                Today's Deals
              </Link>
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
              <li className="nav-item active">
                  <SimpleModal/>
              </li>
              <li className="nav-item active">
                  <SimpleModal2/>
              </li>
            </ul>
          </div>
        </nav>
        <div>
              <Main />
        </div>
  </div>
  );
  
  export default Navbar;
