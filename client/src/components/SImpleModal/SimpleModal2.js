import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../SImpleModal/SimpleModal2';
import './SimpleModal.css'
// import Register from '../../components/Register';
import Login from '../../components/Login'

class SimpleModal2 extends React.Component {
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
              <li className="nav-item active">
              <Button bsStyle="link" onClick={this.handleShow}>
                Log In
              </Button>
              </li>
              {/* <li className="active">
              <Link
                className="active" onClick={this.handleShow}>
                Sign In
              </Link>
            </li> */}
          </ul>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Enter your User Name and Password Here</h4>
            <div>
              <Login/>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

// render(<SimpleModal />);
export default SimpleModal2;