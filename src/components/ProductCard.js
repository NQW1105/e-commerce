import Card from 'react-bootstrap/Card';
import RatingGenerator from './RatingGenerator';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCard = (props) => {
  // console.log(props);
  const {
    productObj: {
      id,
      metadata: { image },
      metadata: { price },
      name,
      ratings,
    },
  } = props;

  return (
    <Card border="0 bg-custom-bg">
      <LinkContainer to={`/product/${id}`}>
        <Card.Img variant="top" src={image} className="cursor-pointer" />
      </LinkContainer>
      <Card.Body>
        <Card.Title
          style={{ height: '3rem', width: '16rem' }}
          className="text-overflow"
        >
          {name}
        </Card.Title>
        <Card.Text className="d-flex align-items-center">
          <RatingGenerator key={id} ratings={ratings} />
        </Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
