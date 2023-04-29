import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  OverlayTrigger,
  Tooltip,
  Image,
  Alert,
} from 'react-bootstrap';
import { Cart, QuestionCircle } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { db, payments } from '../firebaseConfig';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { createCheckoutSession } from '@stripe/firestore-stripe-payments';
// import { User } from 'firebase/auth';

const CartOverview = () => {
  const [totalOrder, setTotalOrder] = useContext(AppContext);
  const [showCartUpdate, setShowCartUpdate] = useState(false);
  const [removeUpdate, setRemoveUpdate] = useState(false);

  let totalItems = 0;
  totalOrder.forEach(() => {
    return (totalItems += 1);
  });
  let subTotal = 0;
  totalOrder.forEach((order) => {
    return (subTotal += order.quantity * order.price);
  });
  let deliveryCost = 8;

  const checkOut = async () => {
    // const docRef = await addDoc(
    //   collection(db, `customers/${User?.uid}/checkout_sessions`),
    //   {
    //     price: '',
    //     success_url: window.location.origin,
    //     cancel_url: window.location.origin,
    //   }
    // );

    // onSnapshot(docRef, (snap) => {
    //   const { error, url } = snap.data();
    //   if (error) {
    //     alert(`An error occured: ${error.message}`);
    //   }
    //   if (url) {
    //     window.location.assign(url);
    //   }
    // });

    const session = await createCheckoutSession(payments, {
      mode: 'payment',
      line_items: totalOrder,
      success_url: `${window.location.origin}?success=true`,
      cancel_url: `${window.location.origin}?cancel=true`,
    });
    // console.log(totalOrder);
    // console.log(session);
    // window.location.assign(session.url);
  };

  return (
    <Container className="py-5">
      {showCartUpdate && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setShowCartUpdate(false)}
          className=""
        >
          Product quantity has been updated
        </Alert>
      )}
      {removeUpdate && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setRemoveUpdate(false)}
          className=""
        >
          Item has been removed
        </Alert>
      )}

      <Row>
        <Col sm={12} lg={6}>
          <h2>YOUR SHOPPING CART</h2>
          <p>Shopping Cart ID #ON23001</p>
        </Col>
        {totalOrder.length !== 0 && (
          <Col
            sm={12}
            lg={6}
            className="d-flex gap-4 flex-column flex-lg-row align-items-lg-center"
          >
            <div className="d-flex justify-content-between d-lg-none">
              <span>
                <strong>ORDER TOTAL</strong> - {totalItems} ITEMS
              </span>
              <span>${subTotal}</span>
            </div>
            <LinkContainer to="/" style={{ borderRadius: 0 }}>
              <Button className="d-none d-md-inline-block bg-secondary border-secondary flex-grow-1">
                Continue Shopping
              </Button>
            </LinkContainer>
            <Button
              className="bg-custom-primary border-custom-primary fw-bold flex-grow-1 "
              style={{ borderRadius: 0 }}
            >
              Proceed to Checkout
            </Button>
          </Col>
        )}
      </Row>

      {totalOrder.length === 0 ? (
        <Row className="pt-5 justify-content-center ">
          <Col md={6} className="">
            <Cart size="66" className="d-block mx-auto" />
            <h4 className="text-center py-4">NO ITEMS IN YOUR CART</h4>
            <Link to="/" className="" style={{ textDecoration: 'none' }}>
              <Button
                className="bg-secondary border-secondary w-100"
                style={{ borderRadius: 0 }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <Row className="pt-5">
          <Col lg={8}>
            <Container>
              <Row className="d-none d-lg-flex bg-secondary text-light py-2 mb-3">
                <Col lg={3} className="p-0"></Col>
                <Col lg={4}>Item</Col>
                <Col lg={1} className="text-center">
                  Price
                </Col>
                <Col lg={3} className="text-center">
                  Qty
                </Col>
                <Col lg={1} className="p-0">
                  Total
                </Col>
              </Row>
              {totalOrder.map((order) => {
                let disableBtn = order.quantity === 1 ? true : false;
                return (
                  <Row className="align-items-center mb-3">
                    <Col
                      xs={4}
                      lg={3}
                      className="p-0 d-flex justify-content-center"
                    >
                      <Image
                        fluid
                        src={order.image}
                        style={{ height: '7.5rem' }}
                      />
                    </Col>
                    <Col xs={8} lg={4}>
                      <u className="fw-bold">{order.product}</u>
                      <p className="py-2 m-0">
                        <strong className="d-none d-lg-inline-block pe-2">
                          Flavor
                        </strong>{' '}
                        {order.flavor}
                      </p>
                    </Col>
                    <Col
                      xs={{ span: 8, offset: 4 }}
                      lg={{ span: 1, offset: 0 }}
                      className="fw-bold text-lg-center"
                    >
                      ${order.price}
                    </Col>
                    <Col
                      xs={{ span: 8, offset: 4 }}
                      lg={{ span: 3, offset: 0 }}
                      className="py-3 text-lg-center d-flex flex-row flex-lg-column justify-content-between align-items-lg-center position-relative"
                    >
                      <Form.Group className="d-flex">
                        <Button
                          className="fs-5 px-0 bg-custom-primary border-custom-primary fw-bold"
                          style={{ width: '2rem', borderRadius: '0' }}
                          onClick={() => {
                            const updatedQuantity = totalOrder.map((item) => {
                              if (item === order) {
                                return {
                                  ...item,
                                  quantity: order.quantity - 1,
                                };
                              } else {
                                return { ...item };
                              }
                            });
                            setTotalOrder(updatedQuantity);
                            setShowCartUpdate(true);
                          }}
                          disabled={disableBtn}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="number"
                          value={order.quantity}
                          className="text-center bg-light"
                          style={{ width: '3rem', borderRadius: '0' }}
                          readOnly
                          plaintext
                        />
                        <Button
                          className="fs-5 px-0 bg-custom-primary border-custom-primary fw-bold"
                          style={{ width: '2rem', borderRadius: '0' }}
                          onClick={() => {
                            const updatedQuantity = totalOrder.map((item) => {
                              if (item === order) {
                                return {
                                  ...item,
                                  quantity: order.quantity + 1,
                                };
                              } else {
                                return { ...item };
                              }
                            });
                            setTotalOrder(updatedQuantity);
                            setShowCartUpdate(true);
                          }}
                        >
                          +
                        </Button>
                      </Form.Group>

                      <u
                        className="hover-visible cursor-pointer d-flex align-items-center remove-item"
                        onClick={() => {
                          const updatedOrder = totalOrder.filter((item) => {
                            return item !== order;
                          });
                          setTotalOrder(updatedOrder);
                          setRemoveUpdate(true);
                        }}
                      >
                        Remove
                      </u>
                    </Col>
                    <Col
                      xs={{ span: 8, offset: 4 }}
                      lg={{ span: 1, offset: 0 }}
                      className="p-0 d-none d-lg-block fw-bold"
                    >
                      ${order.price * order.quantity}
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </Col>
          <Col lg={4}>
            <section>
              <h3 className="mb-3">Promotional Code</h3>
              <InputGroup className="mb-4">
                <Form.Control
                  placeholder="Enter promo code"
                  className="promo-code"
                  style={{ borderRadius: 0 }}
                />
                <Button
                  className="bg-secondary border-secondary promo-code"
                  style={{ borderRadius: 0 }}
                >
                  Button
                </Button>
              </InputGroup>
            </section>
            <section>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="m-0">Overview</h3>
                <span className="fs-5">{totalItems} ITEM</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between my-2">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span>Tax</span>
                <div className="d-flex gap-1">
                  Calculated on checkout
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>
                        According to state tax laws, we are required to collect
                        sales tax for fun
                      </Tooltip>
                    }
                  >
                    <span>
                      <QuestionCircle />
                    </span>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="d-flex justify-content-between my-2">
                <span>Delivery Cost</span>
                <span>${deliveryCost}</span>
              </div>
              <u className="my-2 cursor-pointer">Delivery Options</u>
              {/* Click options will bring loading bar then show delivery rules etc */}
              <hr className="my-4" />
              <div className="d-flex justify-content-between align-items-start">
                <h3 className="mb-4">Order Total</h3>
                <h3>${subTotal + deliveryCost}</h3>
              </div>
              <Button
                className="bg-custom-primary border-custom-primary fw-bold w-100"
                style={{ borderRadius: 0 }}
                onClick={checkOut}
              >
                PROCEED TO CHECKOUT
              </Button>
            </section>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartOverview;
