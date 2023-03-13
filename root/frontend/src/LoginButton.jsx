import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import StatusButtons from './StatusButtons';
//import Passport from 'passport';


/*** Function to create a modal to add a custom class ***/
function LoginButton (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {

  }

  // create Modal with form
  return (
    <div className="custom-login-button">
      {/* <Button variant="dark" onClick={handleShow}>
        Login
      </Button> */}

      <p onClick={handleShow}>
        Login
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="custom-login-button">
            <Form.Label>Email:</Form.Label>
              <Form.Control type="email"/>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginButton;