import { Form, ButtonGroup, Button, ToggleButton } from 'react-bootstrap';

const OrderForm = (props) => {
  const radios = props.radios;
  const radioValue = props.radioValue;
  const setRadioValue = props.setRadioValue;
  const addOrder = props.addOrder;
  const handleShow = props.handleShow;
  const unit = props.unit;
  const updateUnit = props.updateUnit;
  const disabledBtn = props.disabledBtn;

  return (
    <Form className="my-4" onSubmit={addOrder}>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            // variant="alt-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(event) => setRadioValue(event.currentTarget.value)}
            className="me-3 borderless-btn fw-semibold flavor-btn"
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <div className="my-4 d-flex gap-4 gap-md-5">
        <Form.Group className="d-flex">
          <Button
            id="decrement"
            className="fs-4 bg-alt-action border-alt-action fw-bold"
            style={{ width: '3rem', borderRadius: '0' }}
            onClick={updateUnit}
            disabled={disabledBtn}
          >
            -
          </Button>
          <Form.Control
            type="number"
            value={unit}
            className="text-center"
            style={{ width: '4rem', borderRadius: '0' }}
            readOnly
            plaintext
          />
          <Button
            id="increment"
            className="fs-4 bg-alt-action border-alt-action fw-bold"
            style={{ width: '3rem', borderRadius: '0' }}
            onClick={updateUnit}
          >
            +
          </Button>
        </Form.Group>
        <Button
          type="submit"
          className="flex-grow-1 bg-alt-action border-alt-action fw-bold"
          style={{ borderRadius: '0' }}
          onClick={handleShow}
        >
          Add To Cart
        </Button>
      </div>
    </Form>
  );
};

export default OrderForm;
