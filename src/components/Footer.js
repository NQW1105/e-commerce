import { Col, Container, Row } from 'react-bootstrap';
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
} from 'react-icons/fa';

// TO DO LIST :
// Improve the padding/layout/font size
// Make payment svg (visa, mc, amex, paypal) to colorful version
// Hover effect on links/symbols
// Responsive in small screen

const Footer = () => {
  return (
    <footer className="bg-light text-center">
      <hr></hr>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Customer Service</h5>
            <p className="fs-6" style={{ cursor: 'pointer' }}>
              Order Status
            </p>
            <p className="fs-6" style={{ cursor: 'pointer' }}>
              Shipping Support
            </p>
            <p className="fs-6" style={{ cursor: 'pointer' }}>
              Return/Refund Policy
            </p>
            <p className="fs-6" style={{ cursor: 'pointer' }}>
              Terms of Service
            </p>
          </Col>

          <Col md={4}>
            <h5>We Accept</h5>
            <p>
              <a className="fs-1 px-1" href="#">
                <FaCcVisa fill="bg-dark" />
              </a>
              <a className="fs-1 px-1" href="#">
                <FaCcMastercard fill="bg-dark" />
              </a>
              <a className="fs-1 px-1" href="#">
                <FaCcAmex fill="bg-dark" />
              </a>
              <a className="fs-1 px-1" href="#">
                <FaCcPaypal fill="bg-dark" />
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a className="fs-4 px-1" href="#">
                <FaTwitter fill="bg-dark" />
              </a>
              <a className="fs-4 px-1" href="#">
                <FaFacebookSquare fill="bg-dark" />
              </a>
              <a className="fs-4 px-1" href="#">
                <FaInstagram fill="bg-dark" />
              </a>
              <a className="fs-4 px-1" href="#">
                <FaYoutube fill="bg-dark" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-start fs-6">Copyright © 2023 NoPainNoGain</div>
      <div className="text-start fs-6">
        *These statements have not been evaluated by the Food and Drug
        Administration. This product is not intended to diagnose, treat, cure or
        prevent any disease. Always consult with a qualified healthcare
        professional prior to beginning any diet or exercise program or taking
        any dietary supplement
      </div>
    </footer>
  );
};

export default Footer;
