import {
  Button,
  Col,
  InputGroup,
  Form,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';

const OrderSummary = (props) => {
  const totalOrder = props.totalOrder;
  const checkOut = props.checkOut;

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
        className="bg-custom-primary border-custom-primary fw-bold w-100"
        style={{ borderRadius: 0 }}
        onClick={checkOut}
      >
        PROCEED TO CHECKOUT
      </Button>
    </Col>
  );
};

export default OrderSummary;
