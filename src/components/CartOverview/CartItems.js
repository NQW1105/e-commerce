import { Row, Col, Image, Form, Button } from 'react-bootstrap';

const CartItems = (props) => {
  const order = props.order;
  const totalOrder = props.totalOrder;
  //   const totalOrder = useContext(AppContext).totalOrder;
  const setTotalOrder = props.setTotalOrder;
  const setShowCartUpdate = props.setShowCartUpdate;
  const setRemoveUpdate = props.setRemoveUpdate;

  let disableBtn = order.quantity === 1 ? true : false;

  const updateQuantity = (event) => {
    // console.log(event);
    let value = 0;
    if (event.target.id === 'increase') {
      value = 1;
    } else if (event.target.id === 'decrease') {
      value = -1;
    }
    const updatedQuantity = totalOrder.map((item) => {
      if (item === order) {
        return {
          ...item,
          quantity: order.quantity + value,
        };
      } else {
        return { ...item };
      }
    });
    setTotalOrder(updatedQuantity);
    setShowCartUpdate(true);
  };

  const removeItem = () => {
    const updatedOrder = totalOrder.filter((item) => {
      return item !== order;
    });
    setTotalOrder(updatedOrder);
    setRemoveUpdate(true);
  };

  return (
    <>
      <Row className="align-items-center mb-3">
        <Col xs={4} lg={2} className="p-0 d-flex justify-content-center">
          <Image fluid src={order.image} style={{ height: '7.5rem' }} />
        </Col>
        <Col xs={8} lg={4}>
          <u className="fw-bold">{order.name}</u>
          <p className="py-2 m-0">
            <strong className="d-none d-lg-inline-block pe-2">Flavor</strong>{' '}
            {order.flavor}
          </p>
        </Col>
        <Col
          xs={{ span: 8, offset: 4 }}
          lg={{ span: 2, offset: 0 }}
          className="fw-bold text-lg-center"
        >
          ${order.price}
        </Col>
        <Col
          xs={{ span: 8, offset: 4 }}
          lg={{ span: 2, offset: 0 }}
          className="py-3 text-lg-center d-flex flex-row flex-lg-column justify-content-between align-items-lg-center position-relative"
        >
          <Form.Group className="d-flex">
            <Button
              id="decrease"
              className="fs-5 px-0 bg-alt-primary border-alt-primary fw-semibold"
              style={{ width: '2rem', borderRadius: '0' }}
              onClick={updateQuantity}
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
              id="increase"
              className="fs-5 px-0 bg-alt-primary border-alt-primary fw-semibold"
              style={{ width: '2rem', borderRadius: '0' }}
              onClick={updateQuantity}
            >
              +
            </Button>
          </Form.Group>

          <span
            className="hover-visible cursor-pointer d-flex align-items-center remove-item border-bottom border-1 border-secondary text-secondary"
            onClick={removeItem}
          >
            Remove
          </span>
        </Col>
        <Col
          xs={{ span: 8, offset: 4 }}
          lg={{ span: 2, offset: 0 }}
          className="p-0 d-none d-lg-block fw-bold text-center"
        >
          ${(order.price * order.quantity).toFixed(2)}
        </Col>
      </Row>{' '}
    </>
  );
};

export default CartItems;
