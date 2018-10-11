import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register';
import Login from './components/Login';


import Production from './components/Production/Production';
import Inventory from './components/Inventory/Inventory';
import Store from './components/StoreItems/Store';

// import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {/* <Navbar /> */}
            {/* <Route exact path="/" component={Home} /> */}
            <div className="container">
            <Route exact path="/" component={Navbar} />
              {/* <Route exact path="/newuser" component={SimpleModal} /> */}
              {/* <Route exact path="/newuser" component={NewUser} /> */}
              <Route exact path="/store" component={Store} />
              <Route exact path="/production" component={Production} />
              <Route exact path="/inventory" component={Inventory} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
