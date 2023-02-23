import { LinkContainer } from 'react-router-bootstrap';
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
// Scroll back to top with change route

const Footer = () => {
  return (
    <footer className="bg-light text-center">
      <hr></hr>
      <Container>
        <Row className="py-3">
          <Col md={4}>
            <h5>Others</h5>
            <LinkContainer to="about-us" style={{ cursor: 'pointer' }}>
              <p className="fs-6">About Us</p>
            </LinkContainer>
            <LinkContainer to="refund-policy" style={{ cursor: 'pointer' }}>
              <p className="fs-6">Refund Policy</p>
            </LinkContainer>
            <LinkContainer to="terms-conditions" style={{ cursor: 'pointer' }}>
              <p className="fs-6">Terms of Service</p>
            </LinkContainer>
          </Col>

          <Col md={4}>
            <h5>We Accept</h5>
            <p>
              <a className="fs-1 px-1">
                <FaCcVisa fill="bg-dark" />
              </a>
              <a className="fs-1 px-1">
                <FaCcMastercard fill="bg-dark" />
              </a>
              <a className="fs-1 px-1">
                <FaCcAmex fill="bg-dark" />
              </a>
              <a className="fs-1 px-1">
                <FaCcPaypal fill="bg-dark" />
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a
                className="fs-4 px-1"
                href="https://mobile.twitter.com/search?q=%23NoPainNoGain&src=typeahead_click"
              >
                <FaTwitter fill="bg-dark" />
              </a>
              <a
                className="fs-4 px-1"
                href="https://www.facebook.com/hashtag/nopainnogain/"
              >
                <FaFacebookSquare fill="bg-dark" />
              </a>
              <a
                className="fs-4 px-1"
                href="https://www.instagram.com/explore/tags/nopainnogain/"
              >
                <FaInstagram fill="bg-dark" />
              </a>
              <a
                className="fs-4 px-1"
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              >
                <FaYoutube fill="bg-dark" />
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-start fs-6">Copyright © 2023 NoPainNoGain</div>
            <div
              className="text-start text-justify"
              style={{ fontSize: '0.7rem' }}
            >
              * These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure or prevent any disease or illness. Always consult with a
              qualified healthcare professional prior to beginning any diet or
              exercise program or taking any dietary supplement
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
