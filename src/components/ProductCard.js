import Card from 'react-bootstrap/Card';
import RatingGenerator from './RatingGenerator';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCard = (props) => {
  const {
    productObj: { id, img, name, price, rating },
  } = props;

  const productLink = `/product/${id}`;
  return (
    <Card border="0 bg-custom-bg">
      <LinkContainer to={productLink}>
        <Card.Img variant="top" src={img} className="cursor-pointer" />
      </LinkContainer>
      <Card.Body>
        <Card.Title
          style={{ height: '3rem', width: '16rem' }}
          className="text-overflow"
        >
          {name}
        </Card.Title>
        <Card.Text className="d-flex align-items-center">
          <RatingGenerator rating={rating} />
        </Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
