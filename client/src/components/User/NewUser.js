import React, {Component} from 'react';
import './NewUser.css';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
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

                            <div className="form-group-row">
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Date</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm" id="colFormLabelSm"
                                            name="user_date"
                                            value={this.state.user_date}
                                            onChange={this.handleUserChange}
                                        />
                                    </div>
                            </div>
                            <div className="form-group-row">
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Id</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm" id="colFormLabelSm"
                                            placeholder="User Id"
                                            name="user_id"
                                            value={this.state.user_id}
                                            onChange={this.handleUserChange}
                                        />
                                    </div>
                            </div>
                        <div className="form-group-row">
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Password</label>
                                    <div className="col-sm-10">
                                    <input
                                        type="password"
                                        className="form-control form-control-sm" id="colFormLabelSm"
                                        placeholder="User Password"
                                        name="user_password"
                                        value={this.state.user_password}
                                        onChange={this.handleUserChange}
                                        />
                                    </div>
                            
                        </div>
                        <div className="form-group-row">
                                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Email</label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control form-control-sm" id="colFormLabelSm"
                                        placeholder="User Email"
                                        name="user_email"
                                        value={this.state.user_email}
                                        onChange={this.handleUserChange}
                                    />
                                </div>
                        </div>
                        <br></br>
                        <div className="form-group-row">
                            <Modal.Footer>
                                <div className="col-sm-3">
                                    <button className="usersavebtn btn btn-primary" type="submit" onClick={this.handleSubmitChange}>Submit and Close</button>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn btn-primary" onClick={this.handleClose}>Close</button>
                                </div>
                            </Modal.Footer>
                        </div>
                            
            </form>
        </div>
        )
    }
}