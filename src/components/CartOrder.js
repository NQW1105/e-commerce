import { Container, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CartOrder = (props) => {
  return (
    <Container>
      {props.addedProducts.map((order) => {
        const productLink = `/product/${order.id}`;
        return (
          <Row className="py-2">
            <Col className="p-0 d-flex justify-content-center">
              <LinkContainer to={productLink} style={{ height: '9rem' }}>
                <Image src={order.image}></Image>
              </LinkContainer>
            </Col>
            <Col className="px-0 ">
              <p className="m-0 py-1 fw-bold">{order.product}</p>
              <p className="m-0 py-1">{order.flavor}</p>
              <p className="m-0 py-1 fw-bold">${order.price}</p>
              <p className="m-0 py-1">Qty : {order.quantity}</p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default CartOrder;
