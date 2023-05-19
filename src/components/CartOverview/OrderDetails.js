import { Container, Row, Col } from 'react-bootstrap';
import CartItems from './CartItems';

const OrderDetails = (props) => {
  const totalOrder = props.totalOrder;
  const setTotalOrder = props.setTotalOrder;
  const setShowCartUpdate = props.setShowCartUpdate;
  const setRemoveUpdate = props.setRemoveUpdate;

  return (
    <Col lg={8}>
      <Container>
        <Row className="d-none d-lg-flex bg-alt-primary fw-semibold text-white py-2 mb-3">
          <Col lg={2} className="p-0"></Col>
          <Col lg={4}>Item</Col>
          <Col lg={2} className="text-center">
            Price
          </Col>
          <Col lg={2} className="text-center">
            Qty
          </Col>
          <Col lg={2} className="p-0 text-center">
            Total
          </Col>
        </Row>
        {totalOrder.map((order) => {
          return (
            <CartItems
              key={order.id + order.flavor}
              order={order}
              totalOrder={totalOrder}
              setTotalOrder={setTotalOrder}
              setShowCartUpdate={setShowCartUpdate}
              setRemoveUpdate={setRemoveUpdate}
            />
          );
        })}
      </Container>
    </Col>
  );
};

export default OrderDetails;
