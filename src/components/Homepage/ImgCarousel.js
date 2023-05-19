import Carousel from 'react-bootstrap/Carousel';

// Images
import Slide1 from '../../images/home1.jpg';
import Slide2 from '../../images/home2.jpg';
import Slide3 from '../../images/home3.jpg';

const ImgCarousel = () => {
  return (
    <Carousel variant="dark" className="mb-3">
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
  );
};

export default ImgCarousel;
