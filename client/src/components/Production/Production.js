import React, {Component} from 'react';
import './Production.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Production extends Component{
//    constructor(props){
//        super(props);

   state = {
            prod_date: new Date().getDate()+ '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
            prod_id :" ",
            prod_name :" ",
            prod_desc:" ",
            prod_qty:" ",
            prod_price:" "
    }  

    handleInputChange = event =>{
        event.preventDefault();
        const { name, value } = event.target;

    // Set the state for the appropriate input field
        this.setState({[name]: value
        });
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        // alert(`Username: ${this.state.prod_id}+" "+${this.state.prod_name}+" "+${this.state.prod_qty}`);
       axios.post('/api/production', {
                prod_date: this.state.prod_date,
                prod_id: this.state.prod_id,
                prod_name: this.state.prod_name,
                prod_desc: this.state.prod_desc,
                prod_qty: this.state.prod_qty,
                prod_price: this.state.prod_price

            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            alert('Data Saved.......');
       
       
        this.setState({ prod_id: "", prod_name:"",prod_desc:"",prod_qty:"",prod_price:""});
      };

    render(){
        
        return(
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
                </li>
                </div> */}
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
                </ul>
            </div>
        </nav>
         <div className="container">
            <div className="jumbotron">
                <h2>Product Information</h2>
            </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <label for="colFormLabelSm" className="col-form-label">Product Date</label><br/>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                className="form-control3 form-control-sm"
                                placeholder="Prod_date"
                                name="prod_date"
                                value={this.state.prod_date}
                                onChange={this.handleInputChange}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <label for="colFormLabelSm" className="col-form-label">Product Id</label><br/>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="prod_id"
                                placeholder="Prod Id"
                                name="prod_id"
                                value={this.state.prod_id}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <label for="colFormLabelSm" className="col-form-label">Product Name</label><br/>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="prod_name"
                                placeholder="Prod Name"
                                name="prod_name"
                                value={this.state.prod_name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <label for="colFormLabelSm" className="col-form-label">Product Desc</label><br/>
                        </div>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="prod_desc"
                                placeholder="Product Desc"
                                name="prod_desc"
                                value={this.state.prod_desc}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <label for="colFormLabelSm" className="col-form-label">Product Qty</label><br/>
                        </div>
                        <div className="col-sm-3">
                            <input
                                type="text"
                                id="prod_qty"
                                placeholder="Product Qty"
                                name="prod_qty"
                                value={this.state.prod_qty}
                                onChange={this.handleInputChange}
                            />
                        </div>
                            <div className="col-sm-3">
                                <label for="colFormLabelSm" className="col-form-label">Product Price</label><br/>
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="text"
                                    id="prod_price"
                                    placeholder="Product Price"
                                    name="prod_price"
                                    value={this.state.prod_price}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                    <div>
                         <button className="usersavebtn btn btn-primary" id="#save" onClick={this.handleFormSubmit}>Save</button>                        
                    </div> 
                </div>
            </div>
            
        
        )
    }
}

