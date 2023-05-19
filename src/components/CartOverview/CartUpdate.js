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
    <Row className="px-3 mb-4">
      {showCartUpdate && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setShowCartUpdate(false)}
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
          Please login or select demo to checkout items
        </Alert>
      )}
    </Row>
  );
};

export default CartUpdate;
