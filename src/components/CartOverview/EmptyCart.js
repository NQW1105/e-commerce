import { Row, Col, Button } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <Row className="pt-5 justify-content-center ">
      <Col md={6} className="">
        <Cart size="66" className="d-block mx-auto" />
        <h4 className="text-center py-4">NO ITEMS IN YOUR CART</h4>
        <Link to="/product" className="" style={{ textDecoration: 'none' }}>
          <Button
            className="bg-secondary border-secondary w-100"
            style={{ borderRadius: 0 }}
          >
            Continue Shopping
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default EmptyCart;
