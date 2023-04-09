import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetDone, setResetDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const reset = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage('');
      await sendPasswordResetEmail(auth, email);
      setResetDone(true);
      setEmail('');
    } catch (error) {
      console.log(error);
      setErrorMessage('User does not exist');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={9} lg={7}>
          <h2 className="text-center pb-3">Register your account</h2>
          {resetDone && (
            <Alert key="success" variant="success">
              Please check your email to complete password reset
            </Alert>
          )}
          {errorMessage && (
            <Alert key="danger" variant="danger">
              {errorMessage}
            </Alert>
          )}

          <Form onSubmit={reset}>
            <Form.Group className="py-1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" className="my-4 w-100">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
