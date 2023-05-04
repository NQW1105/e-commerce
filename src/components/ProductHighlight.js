import React, { useState, useEffect, useContext } from 'react';
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
import { db } from '../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import RatingGenerator from './RatingGenerator';
import { AppContext } from '../context/AppContext';
import { LinkContainer } from 'react-router-bootstrap';
import Error from '../Pages/Error';
import ProductDetails from './ProductDetails';
import AddCartModal from './AddCartModal';

const ProductHighlight = () => {
  const totalOrder = useContext(AppContext).totalOrder;
  const setTotalOrder = useContext(AppContext).setTotalOrder;

  let { productId } = useParams();

  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [unit, setUnit] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [showOrder, setShowOrder] = useState(false);
  const [radioValue, setRadioValue] = useState('0');
  const radios = [
    { name: 'Chocolate', value: '0' },
    { name: 'Vanilla', value: '1' },
  ];

  const handleClose = () => setShowOrder(false);
  const handleShow = () => setShowOrder(true);

  const updateUnit = (event) => {
    if (event.target.id === 'increment') {
      setUnit(unit + 1);
    } else if (event.target.id === 'decrement') {
      setUnit(unit - 1);
    }
  };

  const addOrder = (event) => {
    event.preventDefault();
    const newOrder = {
      id: productId,
      image: product.stripe_metadata_image,
      name: product.name,
      flavor: radios[radioValue].name,
      price: product.stripe_metadata_price,
      quantity: unit,
      stripeId: product.stripeId,
    };

    if (
      totalOrder.filter(
        (order) =>
          order.name === newOrder.name && order.flavor === newOrder.flavor
      ).length > 0
    ) {
      const updatedOrder = totalOrder.map((order) => {
        if (order.name === newOrder.name && order.flavor === newOrder.flavor) {
          return {
            ...order,
            quantity: order.quantity + newOrder.quantity,
          };
        }
      });
      setTotalOrder(updatedOrder);
    } else {
      setTotalOrder(totalOrder.concat(newOrder));
    }
  };

  useEffect(() => {
    unit === 1 ? setDisabledBtn(true) : setDisabledBtn(false);

    const getProduct = async () => {
      // Selects 'products' collection then search for product doc
      try {
        console.log('ASYNC');
        const productRef = await getDoc(doc(db, 'products', `${productId}`));

        // Selects 'products' collection then selects 'prices' subcollection as reference
        const subColRef = await getDocs(
          collection(db, 'products', `${productId}`, 'prices')
        );
        const stripeRef = subColRef.docs[0].id;

        setProduct({
          ...productRef.data(),
          id: productId,
          stripeId: stripeRef,
        });
        if (error) setError(false);
      } catch (error) {
        setError(true);
      }
    };

    if (Object.keys(product).length === 0 || productId !== product.id)
      getProduct();
  }, [productId, product, unit, error]);

  if (error) return <Error />;

  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Image
            src={product.stripe_metadata_image}
            alt="product-image"
            style={{ height: '21rem' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <h3>{product.name}</h3>
          <RatingGenerator key={product.id} ratings={product.ratings} />
          <p className="py-3 text-justify">
            {product.stripe_metadata_overview}
          </p>
          <h3>${product.stripe_metadata_price}</h3>
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
                  onChange={(event) => setRadioValue(event.currentTarget.value)}
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
                  id="decrement"
                  className="fs-4 bg-custom-primary border-custom-primary fw-bold"
                  style={{ width: '3rem', borderRadius: '0' }}
                  onClick={updateUnit}
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
                  id="increment"
                  className="fs-4 bg-custom-primary border-custom-primary fw-bold"
                  style={{ width: '3rem', borderRadius: '0' }}
                  onClick={updateUnit}
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
          <AddCartModal
            product={product}
            showOrder={showOrder}
            handleClose={handleClose}
            unit={unit}
            radios={radios}
            radioValue={radioValue}
          />
          {/* <Modal
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
                    <Image
                      src={product.stripe_metadata_image}
                      style={{ height: '14rem' }}
                    />
                  </Col>
                  <Col
                    sm={12}
                    md={6}
                    className="fs-5 py-5 py-md-2 d-flex flex-column gap-4 gap-md-3 align-items-center align-items-md-start"
                  >
                    <p className="fw-bold m-0">{product.name}</p>
                    <p className="m-0">Flavor : {radios[radioValue].name}</p>
                    <p className="m-0">Quantity : {unit}</p>
                    <p className="m-0">${product.stripe_metadata_price} each</p>
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
          </Modal> */}
          <ProductDetails product={product} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductHighlight;
