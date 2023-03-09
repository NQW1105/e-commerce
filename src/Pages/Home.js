import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// Components
import ImgCarousel from '../components/ImgCarousel';
import CarouselCaption from '../components/CarouselCaption';
import ProductSlider from '../components/ProductSlider';

// Images
import NewArrival from '../images/new-arrival.jpg';
import BestSeller from '../images/best-seller.jpg';
import ClearanceSales from '../images/clearance-sales.jpg';

// TO DO LIST
// Include text with button to route page
// Hovering promo section should blur image and show button
// Refactor product slider to exclude the texts
// Make promo section responsive (small screen list them from top to bot)

const Home = () => {
  const promoObj = [
    { title: 'New Arrival', img: NewArrival, link: 'new-arrival' },
    { title: 'Best Seller', img: BestSeller, link: 'best-seller' },
    { title: 'Clearance Sales', img: ClearanceSales, link: 'clearance' },
  ];
  const promoSection = promoObj.map((item) => {
    return (
      <Col className="p-0 w-100 h-100 position-relative">
        <div
          className="position-absolute top-50 start-50 translate-middle d-flex flex-column"
          style={{ zIndex: 1 }}
        >
          <p>{item.title}</p>
          <LinkContainer to={`/promotion/${item.link}`}>
            <Button variant="dark">Explore</Button>
          </LinkContainer>
        </div>
        <Image
          src={item.img}
          className="w-100 opacity-50"
          style={{ height: '60vh', objectFit: 'cover' }}
        ></Image>
      </Col>
    );
  });

  return (
    <div>
      <ImgCarousel />
      <CarouselCaption />
      <ProductSlider />
      <p className="text-center fs-3 my-4">Our Promotion</p>
      <Container fluid className="mb-5 p-0">
        <Row className="m-0 p-0 w-100 h-100">{promoSection}</Row>
      </Container>
    </div>
  );
};

export default Home;
