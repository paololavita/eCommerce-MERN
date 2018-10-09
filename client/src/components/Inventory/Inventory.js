import React, { Component } from 'react';
import './Inventory.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import Main from '../../Main';
// import SimpleModal from '../SImpleModal/SimpleModal';
// import App from '../../App';



export default class Inventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //   isAuthenticated: false,
              prod_date: new Date().getFullYear() + '/' + new Date().getMonth() + '/' + new Date().getDate(),
              persons:[]
            };
        }
        
        searchHandlebar = e =>{
            const {name, value} = e.target;
            this.setState({[name]: value});
        }
       
        onChangeFindData = e =>{

        fetch('/api/look/prod/')
        .then(response => response.json())
        .then(data => {this.setState({persons: data});
        })
    }


    render() {

        return (
            <div className="App">
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">E Commerce</a>
            </div>
            {/* <div className="navbar-header">
            <li className="active">
              <a className="navbar-brand">
                <Link
                to="/"
                className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                >
                    E Commerce
                </Link>
                </a>
            </li> */}
            {/* </div> */}
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
              {/* <li className="nav-item dropdown">
              <a className="active dropdown-toggle" href="blank" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User List</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="blank">Action</a>
                <a className="dropdown-item" href="blank">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="blank">Something else here</a>
              </div>
              </li> */}
              
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
                <div className="container">
                    <div className="jumbotron">
                    <h2>Inventory</h2>
                    </div>
                </div>
                <div className="wrapper">
                    <input type="text" className="form-control2" 
                         name="prod_date" id="prod_date" value={this.state.prod_date} onChange={this.searchHandlebar} placeholder="Enter Date"/>&emsp;
                    <button className="btn btn-primary" onClick={this.onChangeFindData}>Search</button>
                </div>
                    <br/>
                <div className="container">
                     <ul>
                        {this.state.persons.map(person => <h2>{person.prod_no+" "+person.prod_date+" "+person.prod_qty+" "+person.prod_dept}</h2>)}
                    </ul>
                    <div className="row">
                    <div className="col-6">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>person.prod_no</td>
                            <td>person.prod_date</td>
                            <td>person.prod_qty</td>
                            <td>person.prod_dept</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}