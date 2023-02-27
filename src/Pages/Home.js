import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from '../components/CarouselCaption';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ProductSlider from '../components/ProductSlider';

import { LinkContainer } from 'react-router-bootstrap';

import Slide1 from '../images/home1.jpg';
import Slide2 from '../images/home2.jpg';
import Slide3 from '../images/home3.jpg';
import NewArrival from '../images/new-arrival.jpg';
import BestSeller from '../images/best-seller.jpg';
import ClearanceSales from '../images/clearance-sales.jpg';

const Home = () => {
  return (
    <div>
      <Carousel variant="dark" className="my-3">
        <Carousel.Item>
          <img
            className="d-block w-100 fix-carousel "
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fix-carousel"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fix-carousel"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <CarouselCaption />
      <ProductSlider />
      <p className="text-center fs-3 my-4">Our Promotion</p>
      <Container fluid className="mb-5 p-0">
        {/* Include text with button to route page */}
        {/* Hover shows the button and blur image */}
        <Row className="m-0 p-0 w-100 h-100">
          <Col className="p-0 w-100 h-100 position-relative">
            <div
              className="position-absolute top-50 start-50 translate-middle d-flex flex-column"
              style={{ zIndex: 1 }}
            >
              <p>New Arrival</p>
              <LinkContainer to="test">
                <Button variant="dark">Explore</Button>
              </LinkContainer>
            </div>
            <Image
              src={NewArrival}
              className="w-100 opacity-50"
              style={{ height: '60vh', objectFit: 'cover' }}
            ></Image>
          </Col>
          <Col className="p-0 w-100 h-100 position-relative">
            <div
              className="position-absolute top-50 start-50 translate-middle d-flex flex-column"
              style={{ zIndex: 1 }}
            >
              <p>Best Seller</p>
              <LinkContainer to="test">
                <Button variant="dark">Explore</Button>
              </LinkContainer>
            </div>
            <Image
              src={BestSeller}
              className="w-100 opacity-50"
              style={{ height: '60vh', objectFit: 'cover' }}
            ></Image>
          </Col>
          <Col className="px-0 w-100 h-100 position-relative">
            <div
              className="position-absolute top-50 start-50 translate-middle d-flex flex-column"
              style={{ zIndex: 1 }}
            >
              <p>Clearance Sales</p>
              <LinkContainer to="test">
                <Button variant="dark">Explore</Button>
              </LinkContainer>
            </div>
            <Image
              src={ClearanceSales}
              className="w-100 opacity-50"
              style={{ height: '60vh', objectFit: 'cover' }}
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
