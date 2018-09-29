import React  from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import NewUser from './components/User/NewUser';
import Production from './components/Production/Production';
import Inventory from './components/Inventory/Inventory';

// import SimpleModal from './components/SImpleModal/SimpleModal';





const App = () => (
  <Router>
    <div>
      {/* <Route exact path="/" component={Login} />  */}
      <Route exact path="/" component={Navbar} />
      {/* <Route exact path="/newuser" component={SimpleModal} /> */}
      <Route exact path="/newuser" component={NewUser} />
      <Route exact path="/production" component={Production} />
      <Route exact path="/inventory" component={Inventory} />
    </div>
  </Router>
);

export default App;
