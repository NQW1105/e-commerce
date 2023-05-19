import { useState } from 'react';
import {
  Button,
  Col,
  InputGroup,
  Form,
  OverlayTrigger,
  Tooltip,
  Spinner,
} from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';

const OrderSummary = (props) => {
  const totalOrder = props.totalOrder;
  const checkOut = props.checkOut;
  const disableBtn = props.disableBtn;
  const setDisableBtn = props.setDisableBtn;
  const [disablePromoBtn, setDisablePromoBtn] = useState(false);
  const [promoInvalid, setPromoInvalid] = useState(false);

  const applyPromo = (event) => {
    event.preventDefault();
    setDisablePromoBtn(true);

    // In future, below code should verify whether promo code is valid. Currently it forces input error
    setTimeout(() => {
      setDisablePromoBtn(false);
      setPromoInvalid(true);
    }, 2000);
  };

  let totalItems = 0;
  totalOrder.forEach(() => {
    return (totalItems += 1);
  });

  let subTotal = 0;
  totalOrder.forEach((order) => {
    return (subTotal += order.quantity * order.price);
  });

  let deliveryCost = 8;

  return (
    <Col lg={4}>
      <h3 className="mt-3 mt-lg-0 mb-lg-3">Promotional Code</h3>
      <Form onSubmit={applyPromo}>
        <InputGroup className="mb-4">
          <Form.Control
            placeholder="Enter promo code"
            className="promo-code borderless-btn"
            isInvalid={promoInvalid}
          />

          <Button
            className="m-0 bg-alt-action border-alt-action promo-code fw-semibold borderless-btn"
            disabled={disablePromoBtn}
            type="submit"
          >
            {disablePromoBtn ? (
              <Spinner animation="border" size="sm" />
            ) : (
              'Enter'
            )}
          </Button>
          <Form.Control.Feedback type="invalid">
            Invalid promo code...
          </Form.Control.Feedback>
        </InputGroup>
      </Form>

      <div className="d-flex justify-content-between align-items-center">
        <h3 className="m-0">Overview</h3>
        <span className="fs-5">{totalItems} ITEM</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between my-2">
        <span>Subtotal</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <div className="d-flex justify-content-between my-2">
        <span>Tax</span>
        <div className="d-flex gap-1">
          Calculated on checkout
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                According to state tax laws, we are required to collect sales
                tax for fun
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
      <hr className="my-4" />
      <div className="d-flex justify-content-between align-items-start">
        <h3 className="mb-4">Order Total</h3>
        <h3>${(subTotal + deliveryCost).toFixed(2)}</h3>
      </div>
      <Button
        className="bg-alt-action border-alt-action fw-semibold w-100 mb-5"
        style={{ borderRadius: 0 }}
        onClick={checkOut}
        disabled={disableBtn}
      >
        {disableBtn && <Spinner animation="border" size="sm" />} PROCEED TO
        CHECKOUT
      </Button>
    </Col>
  );
};

export default OrderSummary;
