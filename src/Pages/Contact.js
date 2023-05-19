import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

// Future work:
// Submit form to firebase database
// Include post method to generate email

const Contact = () => {
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState('d-none text-success');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (valid === false) {
      setValid(true);
    }
    if (event.target.checkValidity()) {
      // Include post method to generate email
      setSuccess('d-block text-success');
      setBtnDisabled(true);
      setTimeout(() => {
        setSuccess('d-none text-success');
        setBtnDisabled(false);
      }, 3000);
    }
  }

  return (
    <Container>
      <Row>
        <Col className="py-5">
          <h3 className="m-0">Contact Us</h3>
          <p className="py-4">
            Hello! If you have any questions or need help on, our team is
            waiting to hear from you
          </p>
          <Form
            onSubmit={handleSubmit}
            noValidate
            validated={valid}
            className=""
          >
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  size="sm"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  size="sm"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                size="sm"
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                size="sm"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Hi there! Please let us know how we may support you
              </Form.Control.Feedback>
            </Form.Group>
            <p className={success} style={{ fontSize: '0.8rem' }}>
              Thank you for reaching out! We'll get back to you soon
            </p>
            {/* <div className="d-lg-flex justify-content-center"> */}
            <Button
              type="submit"
              className="my-4 fw-semibold bg-alt-action border-alt-action borderless-btn contact-btn"
              disabled={btnDisabled}
            >
              Send
            </Button>
            {/* </div> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
