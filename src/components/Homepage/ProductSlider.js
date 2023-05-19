import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../ProductCard';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

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
  const products = useContext(AppContext).products;

  const slideSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
    // autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container className="my-5">
      <Row className="m-0">
        <Col
          sm={12}
          md={4}
          // className="d-md-flex flex-column justify-content-center"
        >
          <h3 className="mb-4">Our Products</h3>
          <p className="text-justify lh-lg">
            Gainz® offers an innovative line of performance supplements to meet
            the needs of everyone - from fitness enthusiasts to elite athletes.
            From essential nutrition to cutting-edge formulas, we've got the
            products to match your unique needs.
          </p>
        </Col>
        <Col sm={12} md={8}>
          <Slider {...slideSettings} style={{ position: 'relative' }}>
            {products.map((product) => {
              return <ProductCard key={product.id} productObj={product} />;
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSlider;
