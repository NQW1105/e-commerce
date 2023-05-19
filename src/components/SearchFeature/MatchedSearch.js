import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';

const MatchedProduct = (props) => {
  const product = props.product;

  return (
    <Row className="py-2 mx-0">
      <hr className="mt-1 mb-3 px-0"></hr>
      <Col xs={3} className="text-center px-0">
        <LinkContainer to={`/product/${product.id}`} style={{ height: '6rem' }}>
          <Image src={product.stripe_metadata_image}></Image>
        </LinkContainer>
      </Col>
      <Col xs={7} className="d-flex flex-column justify-content-center px-0">
        <p className="">{product.stripe_metadata_brand}</p>
        <p className="">{product.name}</p>
      </Col>
      <Col
        xs={2}
        className="d-flex justify-content-center align-items-center px-0"
      >
        <p className="">${product.stripe_metadata_price}</p>
      </Col>
    </Row>
  );
};

export default MatchedProduct;
