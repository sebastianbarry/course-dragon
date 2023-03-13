import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import StatusButtons from './StatusButtons';
import LoginButton from './LoginButton';


/*** Function to create a modal to add a custom class ***/
function SignupButton (props) {
  const [showSignup, setShowSignup] = useState(false);
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [password2Value, setPassword2Value] = useState('');
  const [accounttypeValue, setAccounttypeValue] = useState('');

  const handleCloseSignup = () => {console.log("handleCloseSignup pressed"); setShowSignup(false); }
  const handleShowSignup = async () => {const result = await SignupButton.handleShowLogin; console.log("handleShowSignup pressed"); setShowSignup(true); }
  const handleSubmitSignup = () => {
    let passwordsMatch = passwordValue == password2Value
    console.log(`\nSignup button clicked! 
                 \nUsername: ${usernameValue} 
                 \nPassword: ${passwordValue} 
                 \nPasswords match?: ${passwordsMatch} 
                 \nAccount Type: ${accounttypeValue}`);
  }

  // create Modal with form
  return (
    <div className="signup-button">

      <p>
        <Button onClick={handleShowSignup} type="button" className="btn">Sign Up</Button>
      </p>

      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="custom-signup-button">
            <Form.Label>Username:</Form.Label>
              <Form.Control type="username"
                onChange={e => { setUsernameValue(e.target.value); }}/>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" 
                onChange={e => { setPasswordValue(e.target.value); }}/>
              <Form.Label>Retype Password:</Form.Label>
              <Form.Control type="password" 
                onChange={e => { setPassword2Value(e.target.value); }}/>
              <Form.Label>Account Type:</Form.Label>
              <Form.Control type="accounttype" 
                onChange={e => { setAccountTypeValue(e.target.value); }}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignup}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmitSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
        <Modal.Footer>
          <div onClick={handleCloseSignup}>
          Already have an account?
          <LoginButton />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignupButton;