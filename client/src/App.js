import React  from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import NewUser from './components/User/NewUser';
import Production from './components/Production/Production';


const App = () => (
  <Router>
    <div>
      {/* <Route exact path="/" component={Login} />  */}
      <Route exact path="/" component={Navbar} />
      <Route exact path="/newuser" component={NewUser} />
      <Route exact path="/production" component={Production} />
    </div>
  </Router>
);

export default App;



// class App extends Component {

  // state = {
  //   isAuthenticated: false
  //  };

  // authenticateUser = (user) => {
  //   // user is for later

  //   this.setState({isAuthenticated: true});
  // }

//   showAuthenticatedView = () => {
//     return (
//       <div>
//         <Navbar/>
//         <Route exact path ="/Navbar" component={Navbar}/>
//         <Route exact path ="/new-user" component={User}/>
//         <Route exact path ="/new-production" component={Production}/>
//         <Route exact path ="/new-shipment" component={Shipment}/>
//         {/* <Route exact path ="/new-inventory" component={Inventory}/> */}
//       </div>
//     );
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           { !this.state.isAuthenticated && (
//               <Route  exact path="/"
//                       render={(props) => <Login {...props} doLogin={this.authenticateUser} />} />
//            ) } 
//           { this.state.isAuthenticated && this.showAuthenticatedView() }
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
