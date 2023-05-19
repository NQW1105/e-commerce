import { LinkContainer } from 'react-router-bootstrap';
import heroImage from '../../images/hero-web.jpg';
import { Row, Col, Image, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Row className="mx-0 shadow-lg">
      <Col xs={12} md={8} className="px-0 shadow border-end border-2">
        <Image fluid src={heroImage} className="w-100" />
      </Col>
      <Col
        xs={12}
        md={4}
        // className="bg-alt-secondary py-5 px-4"
        className="bg-alt-secondary py-5 px-4 d-flex flex-column justify-content-center align-items-start"
      >
        {/* <p
          className="bg-alt-primary d-inline text-white px-2 py-1"
          style={{ fontWeight: '500' }}
        >
          Trust me, that's not me...
        </p> */}
        {/* <p
          className="bg-alt-primary d-inline text-white px-2 py-1"
          style={{ fontWeight: '500' }}
        >
          The BEST supplements you can get ...
        </p> */}
        <h1 className="fw-bold mb-4 mx-3">Make your gains come true!</h1>
        <LinkContainer to={'/product'}>
          <Button className="borderless-btn bg-alt-action border-alt-action fs-5 fw-semibold px-4 py-2 mx-3">
            Shop Now
          </Button>
        </LinkContainer>
      </Col>
    </Row>
  );
};

export default HeroSection;
