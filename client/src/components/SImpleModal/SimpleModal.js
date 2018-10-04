import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './SimpleModal.css';
import Newuser from '../User/NewUser';

class SimpleModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
          <ul className="nav navbar-nav">
              <li className="active">
              <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                Sign Up
              </Button>
              </li>
          </ul>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Enter your User Name and Password Here</h4>
            <div>
              <Newuser/>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

// render(<SimpleModal />);
export default SimpleModal;