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
import { AppContext } from '../../context/AppContext';
import EmptyCart from '../CartOverview/EmptyCart';
import { Link } from 'react-router-dom';

const CartOrder = () => {
  const totalOrder = useContext(AppContext).totalOrder;
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => setShowCart(!showCart);

  return (
    <>
      <Button
        onClick={handleCart}
        className="p-2 btn-nav-custom position-relative"
        // className="p-1 bg-alt-primary border-alt-primary position-relative"
      >
        <Cart size={25} className="pointer-events-none" />
        {totalOrder.length !== 0 && (
          <Badge
            bg="secondary"
            className="position-absolute bg-danger rounded-circle cart-quantity translate-middle"
          >
            {totalOrder.length}
          </Badge>
        )}
      </Button>
      <Offcanvas
        scroll
        show={showCart}
        placement={'end'}
        onHide={handleCart}
        className="bg-alt-secondary"
      >
        <Offcanvas.Header
          closeButton
          className="bg-alt-primary text-white shadow"
        >
          <Offcanvas.Title>Your Order</Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="my-0"></hr>
        <Offcanvas.Body className="">
          {/* <Container> */}
          {totalOrder.length === 0 && (
            <div className="d-flex flex-column h-100 justify-content-between">
              {/* <div className="position-absolute top-50 start-50 translate-middle"> */}
              <div className="pt-5 mt-5">
                <Cart size="60" className="d-block mx-auto" />
                <p className="text-center py-3 fs-4">NO ITEMS IN YOUR CART</p>
              </div>
              <Link
                to="/product"
                className=""
                style={{ textDecoration: 'none' }}
              >
                <Button
                  className="bg-alt-action border-alt-action w-100 my-4"
                  style={{ borderRadius: 0 }}
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}

          {totalOrder.map((order) => {
            return (
              <Row key={order.id + order.flavor} className="py-2 px-3">
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
          {/* </Container> */}
        </Offcanvas.Body>
        {totalOrder.length !== 0 && (
          <LinkContainer to="/check-out" style={{ borderRadius: '0' }}>
            <Button className="mx-4 my-5 bg-alt-action border-alt-action fw-bold">
              Checkout
            </Button>
          </LinkContainer>
        )}
      </Offcanvas>
    </>
  );
};

export default CartOrder;
