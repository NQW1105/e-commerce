import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <Container className="py-5">
      <h3 className="py-3">Refund Policy</h3>
      <p className="m-0 fst-italic">
        We always strives to ensure you are satisfied with your purchase. Below
        are some key points of our refund policy:
      </p>
      <ul className="py-3 m-0">
        <li className="py-1">
          Requests can be submitted via <Link to="/contact">Contact Us</Link>{' '}
          within 60 days of purchase.
        </li>
        <li className="py-1">Some items must be refunded and not replaced.</li>
        <li className="py-1">
          Refunds will be granted back to the original form of payment.
        </li>
      </ul>
    </Container>
  );
};

export default RefundPolicy;
