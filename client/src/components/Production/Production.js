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
    <div id="body">

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
          to="/Inventory"
          className={
            window.location.pathname === "/Inventory" ? "nav-link active" : "nav-link"
          }
        >
          Inventory
        </Link>
      </li>
    </ul>
        <br></br><br></br>
         <div className="production-menu">
            <div className="user-input-p">
                   <br></br>
                   <p>Product Information</p>
                   <div>
                        <label id="label">Product Date</label><br/>
                        <input
                            type="text"
                            placeholder="Prod_date"
                            name="prod_date"
                            value={this.state.prod_date}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">Product Id</label><br/>
                        <input
                            type="text"
                            id="prod_id"
                            placeholder="Prod Id"
                            name="prod_id"
                            value={this.state.prod_id}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">Product Name</label><br/>
                        <input
                            type="text"
                            id="prod_name"
                            placeholder="Prod Name"
                            name="prod_name"
                            value={this.state.prod_name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">Product Desc</label><br/>
                        <input
                            type="text"
                            id="prod_desc"
                            placeholder="Product Desc"
                            name="prod_desc"
                            value={this.state.prod_desc}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">Product Qty</label><br/>
                        <input
                            type="text"
                            id="prod_qty"
                            placeholder="Product Qty"
                            name="prod_qty"
                            value={this.state.prod_qty}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">Product Price</label><br/>
                        <input
                            type="text"
                            id="prod_price"
                            placeholder="Product Price"
                            name="prod_price"
                            value={this.state.prod_price}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                        
                    <div>
                         <button className="productionbtn" onClick={this.handleFormSubmit}>Save</button>                        
                    </div> 
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
        )
    }
}

