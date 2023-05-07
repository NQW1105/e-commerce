import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [doneSignUp, setDoneSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMessage('');
      setDoneSignUp(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/sign-in');
    } catch (error) {
      console.error(error);
      //   console.log(error);
      setErrorMessage('Failed to sign up...');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={9} lg={7}>
          <h2 className="text-center pb-3">Register your account</h2>
          {doneSignUp && (
            <Alert key="success" variant="success">
              Sign up complete. Redirecting user to login page...
            </Alert>
          )}
          {errorMessage && (
            <Alert key="danger" variant="danger">
              {errorMessage}
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
            <Form.Group className="py-1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" className="my-5 w-100">
              Sign Up Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
