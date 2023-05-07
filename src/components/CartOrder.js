import { useState, useContext } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Badge,
  Offcanvas,
} from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { AppContext } from '../context/AppContext';

const CartOrder = () => {
  const totalOrder = useContext(AppContext).totalOrder;
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => setShowCart(!showCart);

  return (
    <>
      <Button
        onClick={handleCart}
        className="p-0 bg-custom-secondary border-custom-secondary text-custom-text position-relative"
      >
        <Cart size={41} className="px-2 pointer-events-none" />
        {totalOrder.length !== 0 && (
          <Badge
            bg="secondary"
            className="position-absolute bg-danger rounded-circle cart-quantity translate-middle"
          >
            {totalOrder.length}
          </Badge>
        )}
      </Button>
      <Offcanvas scroll show={showCart} placement={'end'} onHide={handleCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Order</Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="my-0"></hr>
        <Offcanvas.Body>
          <Container>
            {totalOrder.map((order) => {
              return (
                <Row key={order.id + order.flavor} className="py-2">
                  <Col className="p-0 d-flex justify-content-center">
                    <LinkContainer
                      to={`/product/${order.id}`}
                      style={{ height: '9rem' }}
                    >
                      <Image src={order.image}></Image>
                    </LinkContainer>
                  </Col>
                  <Col className="px-0 ">
                    <p className="m-0 py-1 fw-bold">{order.name}</p>
                    <p className="m-0 py-1">{order.flavor}</p>
                    <p className="m-0 py-1 fw-bold">${order.price}</p>
                    <p className="m-0 py-1">Qty : {order.quantity}</p>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </Offcanvas.Body>
        <hr className="my-0"></hr>
        <LinkContainer to="/check-out" style={{ borderRadius: '0' }}>
          <Button className="mx-4 my-5 bg-custom-primary border-custom-primary fw-bold">
            Checkout
          </Button>
        </LinkContainer>
      </Offcanvas>
    </>
  );
};

export default CartOrder;
