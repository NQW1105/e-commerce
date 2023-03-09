import React, { useState, useEffect } from 'react';
import data from '../products.json';
import { useParams } from 'react-router-dom';

import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import RatingGenerator from './RatingGenerator';

const ProductHighlight = () => {
  const [radioValue, setRadioValue] = useState('1');
  const [unit, setUnit] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const radios = [
    { name: 'Chocolate', value: '1' },
    { name: 'Vanilla', value: '2' },
  ];

  useEffect(() => {
    unit === 1 ? setDisabledBtn(true) : setDisabledBtn(false);
  }, [unit]);

  let { productId } = useParams();
  let productObj = '';
  data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.id === productId) {
        return (productObj = product);
      }
    });
  });

  const img = productObj.img;
  const overview = productObj.overview;
  const nutrition = productObj.nutrition;
  const name = productObj.name;
  const price = productObj.price;
  const rating = productObj.rating;

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="d-flex justify-content-center">
            <div className="flex-shrink-0">
              <Image src={img} />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <h3>{name}</h3>
            <RatingGenerator rating={rating} />
            <p className="py-3">{overview}</p>
            <h3>${price}</h3>
            <Form className="my-3">
              <ButtonGroup className="my-3">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="secondary"
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
              <Form.Group className="d-flex">
                <Button
                  className="fs-4"
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
                  className="fs-4"
                  style={{ width: '3rem', borderRadius: '0' }}
                  onClick={() => setUnit(unit + 1)}
                >
                  +
                </Button>
              </Form.Group>
              <Button className="mt-3" type="submit">
                Add To Cart
              </Button>
            </Form>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Overview</Accordion.Header>
                <Accordion.Body>{overview}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Supplement Fact</Accordion.Header>
                <Accordion.Body className="d-flex justify-content-center">
                  <Image src={nutrition} className="py-3" />
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
