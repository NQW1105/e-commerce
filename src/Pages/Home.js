import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// Components
import ImgCarousel from '../components/Homepage/ImgCarousel';
import CarouselCaption from '../components/Homepage/CarouselCaption';
import ProductSlider from '../components/Homepage/ProductSlider';

// Images
import NewArrival from '../images/new-arrival-web.jpg';
import BestSeller from '../images/best-seller-web.jpg';
import ClearanceSales from '../images/clearance-sales-web.jpg';
import HeroSection from '../components/Homepage/HeroSection';

// TO DO LIST
// Hovering promo section should blur image and show button
// Refactor product slider to exclude the texts

const Home = () => {
  const promoObj = [
    { title: 'New Arrival', img: NewArrival, link: 'new-arrival' },
    { title: 'Best Seller', img: BestSeller, link: 'best-seller' },
    { title: 'Clearance Sales', img: ClearanceSales, link: 'clearance' },
  ];
  const promoSection = promoObj.map((item) => {
    return (
      <Col
        key={item.link}
        lg={4}
        className="p-0 position-relative"
        // style={{ height: '60vh' }}
      >
        <div
          className="position-absolute top-50 start-50 translate-middle w-100 d-flex flex-column"
          style={{ zIndex: 1 }}
        >
          <p
            className="fw-semibold text-center promo-text"
            style={{ color: '#212529' }}
          >
            {item.title}
          </p>
          <LinkContainer
            to={`/promotion/${item.link}`}
            style={{ width: '30%' }}
            className="align-self-center"
          >
            <Button className="bg-alt-primary border-alt-primary borderless-btn fw-semibold shadow">
              Explore
            </Button>
          </LinkContainer>
        </div>
        <Image
          src={item.img}
          className="h-100 w-100"
          style={{ objectFit: 'cover', opacity: '60%' }}
        ></Image>
      </Col>
    );
  });

  return (
    <div>
      {/* <ImgCarousel /> */}
      <HeroSection />
      <CarouselCaption />
      <ProductSlider />
      <h3 className="text-center fs-3 my-4">Our Promotion</h3>
      <Container fluid className="mb-5 px-0 pb-5">
        <Row className="m-0 p-0 w-100 h-100">{promoSection}</Row>
      </Container>
    </div>
  );
};

export default Home;
