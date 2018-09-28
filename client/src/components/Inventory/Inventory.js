import React, { Component } from 'react';
import './Inventory.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <div id="mainbody">
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
                            to="/shipment"
                            className={
                                window.location.pathname === "/shipment" ? "nav-link active" : "nav-link"
                            }
                            >
                            Shipment
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/inventory"
                            className={
                                window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"
                            }
                            >
                            Inventory
                        </Link>
                    </li> 
                </ul>
                <br></br>
                <br></br>
                <div id="div_look">
                    <input type="text" 
                         name="prod_date" id="prod_date" value={this.state.prod_date} onChange={this.searchHandlebar} placeholder="Enter Date"/>&emsp;
                    <button id="search_data" onClick={this.onChangeFindData}>Search</button>
               
                </div>
                    <br/>
                <div id="display_data">
                     <ul>
                        {this.state.persons.map(person => <p>{person.prod_no+" "+person.prod_date+" "+person.prod_qty+" "+person.prod_dept}</p>)}
                    </ul>
                </div>
            </div>
        )
    }
}