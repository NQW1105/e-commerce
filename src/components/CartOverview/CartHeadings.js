import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CartHeadings = (props) => {
  const totalOrder = props.totalOrder;
  const checkOut = props.checkOut;
  const disableBtn = props.disableBtn;
  const setDisableBtn = props.setDisableBtn;

  let totalItems = 0;
  totalOrder.forEach(() => {
    return (totalItems += 1);
  });

  let subTotal = 0;
  totalOrder.forEach((order) => {
    return (subTotal += order.quantity * order.price);
  });

  return (
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
            <span className="fw-semibold">${subTotal}</span>
          </div>
          <LinkContainer to="/product" style={{ borderRadius: 0 }}>
            <Button className="d-none d-md-inline-block bg-alt-primary border-alt-primary flex-grow-1">
              Continue Shopping
            </Button>
          </LinkContainer>
          <Button
            className="bg-alt-action border-alt-action fw-bold flex-grow-1"
            style={{ borderRadius: 0 }}
            onClick={checkOut}
            disabled={disableBtn}
          >
            {disableBtn && <Spinner animation="border" size="sm" />} Proceed to
            Checkout
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default CartHeadings;
