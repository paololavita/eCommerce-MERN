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
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="blank" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User List</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="blank">Action</a>
                <a className="dropdown-item" href="blank">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blank">Something else here</a>
              </div>
              </li>
              <li>
                  <SimpleModal/>      
              </li>
            {/* <li className="active">
              <Link
                to="/newuser"
                className={
                  window.location.pathname === "/newuser" ? "nav-link active" : "nav-link"
                }
                >
                User
              </Link>
            </li> */}
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
