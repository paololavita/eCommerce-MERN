import React, {Component} from 'react';
import './NewUser.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';

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
            <form>


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
                <div className="user-menu">
                    <div className="user-input-u">

                        <br></br>
                        
                            <div>
                                    <button  className="usersavebtn btn btn-primary" type="submit" onClick={this.handleSubmitChange}>Submit</button>
                            </div>
            </form>
        </div>
        )
    }
}