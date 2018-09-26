import React, {Component} from 'react';
import './NewUser.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NewUser extends Component{
    
        state = {
                user_date: new Date().getDate()+ '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
                user_id: "",
                user_password:"",
                user_email:""      
        };

        handleUserChange = event =>{

            event.preventDefault();
            const { name, value } = event.target;
    
        // Set the state for the appropriate input field
            this.setState({[name]: value
            });
        }



    handleSubmitChange = e =>{
   
        axios.post('/api/user', {
            user_date: this.state.user_date,
            user_id:   this.state.user_id,
            user_pwd:  this.state.user_password,
            user_email:this.state.user_email
           
        })
        .then(function (response) {
             console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        alert('Data Saved.......');

        this.setState({user_id:"",
                        user_password:"",
                        user_email:""})

    }

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
      </li>
      
    </ul>
                <br></br><br></br>
                <div className="user-menu">
                    <div className="user-input-u">
                        <br></br>
                        <p>New User Information</p>
                     <div>
                     <br></br><br></br>
                    <label id="label">User Date</label><br/>
                    <input
                            type="text"
                            placeholder="User Date"
                            name="user_date"
                            value={this.state.user_date}
                            onChange={this.handleUserChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">User Id</label><br/>
                        <input
                            type="text"
                            id="user_id"
                            placeholder="User Id"
                            name="user_id"
                            value={this.state.user_id}
                            onChange={this.handleUserChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">User Password</label><br/>
                        <input
                            type="password"
                            id="user_password"
                            placeholder="User Password"
                            name="user_password"
                            value={this.state.user_password}
                            onChange={this.handleUserChange}
                        />
                    </div>
                    <br></br>
                    <div>
                        <label id="label">User Email</label><br/>
                        <input
                            type="text"
                            id="user_email"
                            placeholder="User Email"
                            name="user_email"
                            value={this.state.user_email}
                            onChange={this.handleUserChange}
                        />
                    </div>
                    <br></br>
                    
                    <div>
                             <button  className="usersavebtn" onClick={this.handleSubmitChange}>Create User</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}