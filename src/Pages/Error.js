import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Arnold from '../images/arnold.png';
import { Container, Row, Col } from 'react-bootstrap';

const Error = () => {
  return (
    <div>
      <h2 className="px-5 py-4 m-0">
        <u>Page Not Found!</u>
      </h2>
      <Container className="text-center">
        <Row className="d-flex justify-content-center">
          <Col xs={8}>
            <Image src={Arnold} thumbnail />
          </Col>
        </Row>
        <Row>
          <p className="mx-auto pt-3 ">
            You had visited the wrong page my friend... Here's the{' '}
            <Link to="home">Homepage</Link>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
