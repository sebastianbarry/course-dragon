import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import StatusButtons from './StatusButtons';
import SignupButton from './SignupButton'


/*** Function to create a modal to add a custom class ***/
function LoginInnard (props) {
  // create Modal with form
  return (
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="custom-login-button">
            <Form.Label>Email:</Form.Label>
              <Form.Control type="username"
                onChange={e => { setUsernameValue(e.target.value); }}/>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" 
                onChange={e => { setPasswordValue(e.target.value); }}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmitLogin}>
            Login
          </Button>
        </Modal.Footer>
        <Modal.Footer>
          <div onClick={handleCloseLogin}>
          New to Course Dragon?
          <SignupButton />
          </div>
        </Modal.Footer>
      </Modal>
  );
}

export default LoginInnard;