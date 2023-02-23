import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Future work:
// Include checkbox above button for terms and conditions
// Clicking terms should pop up lorem ipsum text or rick roll gif teehee

const Contact = () => {
  const [valid, setValid] = useState(false);

  function handleSubmit(event) {
    // console.log(event);
    event.preventDefault();
    if (valid === false) {
      setValid(true);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="m-0 py-4">Contact Us</h3>
          <p className="pb-4">
            Hello! If you have any questions or need help on, our team is
            waiting to hear from you
          </p>
          <Form onSubmit={handleSubmit} noValidate validated={valid}>
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  size="sm"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" size="sm" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="" size="sm" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} size="sm" required />
              <Form.Control.Feedback type="invalid">
                Hi there! Please let us know how we may support you
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="mt-2 mb-5">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
