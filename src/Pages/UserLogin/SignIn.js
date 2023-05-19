import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInAnonymously,
} from 'firebase/auth';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInStatus, setSignInStatus] = useState(false);
  const [failedSignIn, setFailedSignIn] = useState('');

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSignInStatus(true);
      navigate('/');
    } catch (error) {
      console.error(error);
      setFailedSignIn('Failed to sign in...');
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const demoSignIn = async () => {
    try {
      await signInAnonymously(auth);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col md={9} lg={7}>
          <h2 className="text-center pb-3">Sign in to your account</h2>
          {signInStatus && (
            <Alert key="success" variant="success">
              Signing in...
            </Alert>
          )}
          {failedSignIn && (
            <Alert key="danger" variant="danger">
              {failedSignIn}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="py-1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="py-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
              ></Form.Control>
            </Form.Group>
            <LinkContainer to="/reset-password">
              <a href="#" className="d-block">
                Forgot your password?
              </a>
            </LinkContainer>

            <Button
              type="submit"
              className="my-3 w-100 borderless-btn bg-alt-action border-alt-action fw-semibold"
            >
              Sign In
            </Button>
            <button
              onClick={googleSignIn}
              className="google-btn d-flex gap-3 justify-content-center align-items-center my-2 py-2 px-3 w-100"
            >
              <span>
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  style={{ height: '18px', width: '18px' }}
                ></img>
              </span>
              <span className="fw-bold" style={{ color: '#757575' }}>
                Google Sign In
              </span>
            </button>
            <div className="position-relative py-4 mt-4">
              <div className="border border-1 w-100 position-absolute top-50"></div>
              <div className="d-flex justify-content-center">
                <p className="m-0 px-2 bg-alt-bg" style={{ zIndex: 8 }}>
                  Or continue with
                </p>
              </div>
            </div>
          </Form>
          <LinkContainer to="/register">
            <button
              className="mt-3 google-btn py-2 px-3 w-100 fw-bold"
              style={{ color: '#757575' }}
            >
              Create an account
            </button>
          </LinkContainer>

          <button
            className="my-3 google-btn py-2 px-3 w-100 fw-bold"
            style={{ color: '#757575' }}
            onClick={demoSignIn}
          >
            Demo User
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
