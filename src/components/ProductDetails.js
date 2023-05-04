import { Accordion, Image } from 'react-bootstrap';

const ProductDetails = (props) => {
  const { stripe_metadata_overview, stripe_metadata_nutritionLabel } =
    props.product;

  return (
    <Accordion alwaysOpen className="mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Product Overview</Accordion.Header>
        <Accordion.Body>{stripe_metadata_overview}</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Supplement Fact</Accordion.Header>
        <Accordion.Body className="d-flex justify-content-center">
          <Image fluid src={stripe_metadata_nutritionLabel} className="py-3" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductDetails;
