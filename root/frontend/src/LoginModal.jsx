import React, { useState } from "react";
import { Button, Modal, Form, Nav } from "react-bootstrap";

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = () => setIsLogin(true);
  const handleSignUp = () => setIsLogin(false);

  const openLogin = () => {
    setIsLogin(true);
    setShow(true);
  }
  const openSignup = () => {
    setIsLogin(false);
    setShow(true);
  }

  return (
    <>
      <Button variant="primary" onClick={openLogin}>
        Login
      </Button>
      <Button variant="primary" onClick={openSignup}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Nav>
              <Nav.Link onClick={handleLogin}>Login</Nav.Link>
              <Nav.Link onClick={handleSignUp}>Sign Up</Nav.Link>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <LoginForm handleClose={handleClose} />
          ) : (
            <SignUpForm handleClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

const LoginForm = ({ handleClose }) => (
  <Form>
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter Username" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleClose}>
      Login
    </Button>
  </Form>
);

const SignUpForm = ({ handleClose }) => (
  <Form>
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="username" placeholder="Enter Username" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicPasswordConfirm">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleClose}>
      Sign Up
    </Button>
  </Form>
);

export default LoginModal;