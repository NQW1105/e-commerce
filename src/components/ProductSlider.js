import Card from 'react-bootstrap/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Pictures etc
import ONGold from '../images/products/ON-Gold.webp';
import Energy from '../images/products/Energy.webp';
import Creatine from '../images/products/ON-Creatine.webp';
import Plant from '../images/products/PlantProtein.webp';
import PumpChasers from '../images/products/PumpChasers.webp';
import WheyIsolates from '../images/products/WheyIsolates.webp';
import { Container, Row, Col } from 'react-bootstrap';

// Icons
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowForwardIos />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIos />
    </div>
  );
}

const ProductSlider = () => {
  const slideSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <h3>Our Products</h3>
            <p className="text-justify">
              From essential nutrition to cutting-edge formulas, we've got the
              products to match your unique needs.
            </p>
          </Col>
          <Col sm={12} md={8}>
            <Slider {...slideSettings} style={{ position: 'relative' }}>
              <Card border="0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ONGold} />
                <Card.Body>
                  <Card.Title
                    style={{ height: '3rem' }}
                    className="text-overflow"
                  >
                    ON Gold Standard 100% Whey Protein
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <span className="px-1">(158)</span>
                  </Card.Text>
                  <Card.Text>$248.00</Card.Text>
                </Card.Body>
              </Card>
              <Card border="0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Energy} />
                <Card.Body>
                  <Card.Title
                    style={{ height: '3rem' }}
                    className="text-overflow"
                  >
                    3D Energy Drinks
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                    <span className="px-1">(21)</span>
                  </Card.Text>
                  <Card.Text>$8.50</Card.Text>
                </Card.Body>
              </Card>
              <Card border="0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Creatine} />
                <Card.Body>
                  <Card.Title
                    style={{ height: '3rem' }}
                    className="text-overflow"
                  >
                    ON Micronized Creatine
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <span className="px-1">(235)</span>
                  </Card.Text>
                  <Card.Text>$85.30</Card.Text>
                </Card.Body>
              </Card>
              <Card border="0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Plant} />
                <Card.Body>
                  <Card.Title
                    style={{ height: '3rem' }}
                    className="text-overflow"
                  >
                    MuscleTech Plant Protein
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                    <span className="px-1">(57)</span>
                  </Card.Text>
                  <Card.Text>$123.00</Card.Text>
                </Card.Body>
              </Card>
              <Card border="0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PumpChasers} />
                <Card.Body>
                  <Card.Title
                    style={{ height: '3rem' }}
                    className="text-overflow"
                  >
                    Pump N' Grind
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <span className="px-1">(88)</span>
                  </Card.Text>
                  <Card.Text>$59.90</Card.Text>
                </Card.Body>
              </Card>
              <Card border="0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={WheyIsolates} />
                <Card.Body>
                  <Card.Title
                    style={{ height: '3rem' }}
                    className="text-overflow"
                  >
                    MuscleTech Nitrotech RIPPED
                  </Card.Title>
                  <Card.Text className="d-flex align-items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <span className="px-1">(96)</span>
                  </Card.Text>
                  <Card.Text>$306.00</Card.Text>
                </Card.Body>
              </Card>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSlider;
