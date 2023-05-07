import { Modal, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AddCartModal = (props) => {
  // console.log(props);
  const showOrder = props.showOrder;
  const handleClose = props.handleClose;

  const product = props.product;
  const unit = props.unit;
  const radios = props.radios;
  const radioValue = props.radioValue;

  // const newOrder = {
  //   id: productId,
  //   image: product.stripe_metadata_image,
  //   name: product.name,
  //   flavor: radios[radioValue].name,
  //   price: product.stripe_metadata_price,
  //   quantity: unit,
  //   stripeId: product.stripeId,
  // };

  return (
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
            className="add-to-cart__headline-icon add-to-cart__headline-icon--success"
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
                <LinkContainer to="/check-out" style={{ borderRadius: '0' }}>
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
  );
};

export default AddCartModal;
