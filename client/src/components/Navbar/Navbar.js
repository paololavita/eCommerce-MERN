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
      {/* <li className="nav-item">
        <Link
          to="/Learn"
          className={
            window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
          }
        >
          Learn
        </Link>
      </li> */}
    </ul>
  );
  
  export default Navbar;
  





// export default class Navbar extends Component {


    // newUser() {

    // }

    // newproduction(){

    // }

    // render() {
    //     return (
    //         <div className="Navbar">
    //             <ul>

    //                 <li><a>Exit</a></li>
    //                 <li><Link to="/new-user" className="newuser" onClick={this.newUser}>Create New User</Link></li>
    //                 <li><Link to="/new-production" className="production" onClick={this.newProduction}>Production</Link></li>
    //                 <li><Link to="/new-shipment" className="shipment" onClick={this.newShipment}>Shipment</Link></li>
    //                 {/* <li><Link to="/new-inventory" className="invent" onClick={this.newInventory}>Inventory</Link></li> */}
    //             </ul>
    //         </div>
    //     )
    // }
// }