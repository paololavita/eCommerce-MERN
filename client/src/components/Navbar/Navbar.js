import React from 'react';

import { Link } from 'react-router-dom';
import Main from '../../Main';
import './Navbar.css';
import SimpleModal from '../SImpleModal/SimpleModal';
// import newuser from './../User/NewUser';


const Navbar = () => (
  <div className="App">
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="site">E Commerce</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="site">Today's Deals</a></li>
              
              <li>
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
        <div>
              <Main />
        </div>
  </div>
  );
  
  export default Navbar;
