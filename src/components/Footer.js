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

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-alt-primary text-center border-top border-1 border-secondary shadow-lg">
      <Container className="pt-5 pb-4">
        <Row className="mb-3">
          <Col md={4} className="py-3">
            <h5 className="mb-4 text-white fs-5">Others</h5>
            <LinkContainer to="about-us">
              {/* <div className="footer-link text-white " onClick={scrollTop}>
                About Us
              </div> */}
              <p className="">
                <span
                  className="footer-link text-white cursor-pointer"
                  onClick={scrollTop}
                >
                  About Us
                </span>
              </p>
            </LinkContainer>
            <LinkContainer to="refund-policy">
              <p>
                <span
                  className="footer-link text-white cursor-pointer"
                  onClick={scrollTop}
                >
                  Refund Policy
                </span>
              </p>
            </LinkContainer>
            <LinkContainer to="terms-conditions">
              <p>
                <span
                  className="footer-link text-white cursor-pointer"
                  onClick={scrollTop}
                >
                  Terms of Service
                </span>
              </p>
            </LinkContainer>
          </Col>

          <Col md={4} className="py-3">
            <h5 className="mb-4 text-white fs-5">We Accept</h5>
            <p>
              <FaCcVisa fill="white" className="fs-1 px-1" />
              <FaCcMastercard fill="white" className="fs-1 px-1" />
              <FaCcAmex fill="white" className="fs-1 px-1" />
              <FaCcPaypal fill="white" className="fs-1 px-1" />
            </p>
          </Col>
          <Col md={4} className="py-3">
            <h5 className="mb-4 text-white fs-5">Follow Us</h5>
            <p>
              <a
                className="fs-4 px-1"
                href="https://mobile.twitter.com/search?q=%23NoPainNoGain&src=typeahead_click"
              >
                <FaTwitter fill="white" />
              </a>
              <a
                className="fs-4 px-1"
                href="https://www.facebook.com/hashtag/nopainnogain/"
              >
                <FaFacebookSquare fill="white" />
              </a>
              <a
                className="fs-4 px-1"
                href="https://www.instagram.com/explore/tags/nopainnogain/"
              >
                <FaInstagram fill="white" />
              </a>
              <a
                className="fs-4 px-1"
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              >
                <FaYoutube fill="white" />
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-start fs-6 text-white fw-semibold">
              Copyright © 2023 Gainz
            </div>
            <div
              className="text-start text-white"
              style={{ fontSize: '0.8rem' }}
            >
              All Rights Reserved
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
