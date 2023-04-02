import React, { useState, useEffect, useContext } from 'react';
import data from '../products.json';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Accordion,
  Form,
  ButtonGroup,
  ToggleButton,
  Modal,
} from 'react-bootstrap';
import RatingGenerator from './RatingGenerator';
import { CartContext } from '../App';
import { LinkContainer } from 'react-router-bootstrap';
// import CartOrder from './CartOrder';

// TODO List :
// Update cart logo to include ordered quantity

const ProductHighlight = () => {
  const [radioValue, setRadioValue] = useState('0');
  const [unit, setUnit] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [totalOrder, setTotalOrder] = useContext(CartContext);

  let { productId } = useParams();
  let productObj = '';
  data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.id === productId) {
        return (productObj = product);
      }
    });
  });

  const id = productObj.id;
  const img = productObj.img;
  const overview = productObj.overview;
  const nutrition = productObj.nutrition;
  const name = productObj.name;
  const price = productObj.price;
  const rating = productObj.rating;

  const radios = [
    { name: 'Chocolate', value: '0' },
    { name: 'Vanilla', value: '1' },
  ];

  useEffect(() => {
    unit === 1 ? setDisabledBtn(true) : setDisabledBtn(false);
  }, [unit]);

  const handleClose = () => setShowOrder(false);
  const handleShow = () => setShowOrder(true);
  const addOrder = (event) => {
    event.preventDefault();
    const cartData = {
      id: id,
      product: name,
      quantity: unit,
      flavor: radios[radioValue].name,
      price: parseInt(price),
      image: img,
    };

    if (
      totalOrder.filter(
        (order) =>
          order.product === cartData.product && order.flavor === cartData.flavor
      ).length > 0
    ) {
      const updatedOrder = totalOrder.map((order) => {
        if (
          order.product === cartData.product &&
          order.flavor === cartData.flavor
        ) {
          return {
            ...order,
            quantity: order.quantity + cartData.quantity,
          };
        }
      });
      setTotalOrder(updatedOrder);
    } else {
      setTotalOrder(totalOrder.concat(cartData));
    }
  };

  return (
    <div className="position-relative">
      <Container className="py-5">
        <Row>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="">
              <Image src={img} style={{ height: '21rem' }} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h3>{name}</h3>
            <RatingGenerator rating={rating} />
            <p className="py-3 text-justify">{overview}</p>
            <h3>${price}</h3>
            <Form className="my-4" onSubmit={addOrder}>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="custom-secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    className="me-3"
                    style={{ borderRadius: '0px' }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <div className="my-4 d-flex gap-4 gap-md-5">
                <Form.Group className="d-flex">
                  <Button
                    className="fs-4 bg-custom-primary border-custom-primary fw-bold"
                    style={{ width: '3rem', borderRadius: '0' }}
                    onClick={() => setUnit(unit - 1)}
                    disabled={disabledBtn}
                  >
                    -
                  </Button>
                  <Form.Control
                    type="number"
                    value={unit}
                    className="text-center"
                    style={{ width: '4rem', borderRadius: '0' }}
                    readOnly
                    plaintext
                  />
                  <Button
                    className="fs-4 bg-custom-primary border-custom-primary fw-bold"
                    style={{ width: '3rem', borderRadius: '0' }}
                    onClick={() => setUnit(unit + 1)}
                  >
                    +
                  </Button>
                </Form.Group>
                <Button
                  type="submit"
                  className="flex-grow-1 bg-custom-primary border-custom-primary fw-bold"
                  style={{ borderRadius: '0' }}
                  onClick={handleShow}
                >
                  Add To Cart
                </Button>
              </div>
            </Form>
            <Modal
              centered
              fullscreen="sm-down"
              show={showOrder}
              onHide={handleClose}
              className="modal-lg"
            >
              <Modal.Header closeButton className="position-relative py-4">
                <Modal.Title className="d-flex align-items-center gap-3 position-absolute start-50 translate-middle-x">
                  <svg
                    class="add-to-cart__headline-icon add-to-cart__headline-icon--success"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '1.5rem', height: '1.5rem' }}
                  >
                    <path
                      d="M9.52469304,14.1129604 L9.52360164,14.111869 L8.61882674,15.0166439 L3.85920873,10.2472033 L5.31514325,8.79236016 L8.62100955,12.1058663 L15.3582538,5.1579809 L16.8141883,6.61391542 L9.52469304,14.1129604 Z M10.0016371,0 C4.47803547,0 0,4.47694407 0,9.9994543 C0,15.5230559 4.47803547,20 10.0016371,20 C15.5230559,20 20,15.5230559 20,9.9994543 C20,4.47694407 15.5230559,0 10.0016371,0 L10.0016371,0 Z"
                      id="Fill-1"
                    ></path>
                  </svg>
                  <span className="fw-bold fs-4">ADDED TO CART</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-4 py-lg-5">
                <Container>
                  <Row>
                    <Col
                      sm={12}
                      md={6}
                      className="d-flex justify-content-center justify-content-md-end justify-content-lg-center align-items-md-center"
                    >
                      <Image src={img} style={{ height: '14rem' }} />
                    </Col>
                    <Col
                      sm={12}
                      md={6}
                      className="fs-5 py-5 py-md-2 d-flex flex-column gap-4 gap-md-3 align-items-center align-items-md-start"
                    >
                      <p className="fw-bold m-0">{name}</p>
                      <p className="m-0">Flavor : {radios[radioValue].name}</p>
                      <p className="m-0">Quantity : {unit}</p>
                      <p className="m-0">${price} each</p>
                      <div className="d-flex flex-column flex-lg-row gap-4 w-100">
                        <LinkContainer
                          to="/check-out"
                          style={{ borderRadius: '0' }}
                        >
                          <Button
                            className="bg-custom-primary border-custom-primary fw-bold"
                            onClick={handleClose}
                          >
                            View Cart
                          </Button>
                        </LinkContainer>

                        <Button
                          className="bg-custom-primary border-custom-primary fw-bold"
                          style={{ borderRadius: '0' }}
                          onClick={handleClose}
                        >
                          Continue Shopping
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
            </Modal>
            <Accordion alwaysOpen className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Overview</Accordion.Header>
                <Accordion.Body>{overview}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Supplement Fact</Accordion.Header>
                <Accordion.Body className="d-flex justify-content-center">
                  <Image fluid src={nutrition} className="py-3" />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductHighlight;
