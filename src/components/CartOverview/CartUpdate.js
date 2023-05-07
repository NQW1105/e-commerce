import { Alert, Row } from 'react-bootstrap';

const CartUpdate = (props) => {
  const {
    showCartUpdate,
    setShowCartUpdate,
    removeUpdate,
    setRemoveUpdate,
    userError,
    setUserError,
  } = props;

  return (
    <Row>
      {showCartUpdate && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setShowCartUpdate(false)}
          className=""
        >
          Product quantity has been updated
        </Alert>
      )}
      {removeUpdate && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setRemoveUpdate(false)}
          className=""
        >
          Item has been removed
        </Alert>
      )}
      {userError && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setUserError(false)}
          className=""
        >
          Please login or use the demo to checkout cart items
        </Alert>
      )}
    </Row>
  );
};

export default CartUpdate;
