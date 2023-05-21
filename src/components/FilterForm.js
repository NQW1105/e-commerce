import { Offcanvas, Accordion, Form } from 'react-bootstrap';

const FilterForm = ({ showFilter, closeFilter, updateCheckbox }) => {
  return (
    <Offcanvas
      show={showFilter}
      onHide={closeFilter}
      responsive="lg"
      className="bg-alt-bg"
    >
      <Offcanvas.Header closeButton className="filter-offcanvas">
        <Offcanvas.Title>Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Accordion flush alwaysOpen className="w-100 bg-alt-bg">
          <h4 className="d-none d-lg-block p-3">Filters</h4>
          <Accordion.Item eventKey="0">
            <Accordion.Header>By Category</Accordion.Header>
            <Accordion.Body>
              <Form.Check
                type="checkbox"
                id="protein"
                label="Protein"
                onChange={updateCheckbox}
              />
              <Form.Check
                type="checkbox"
                id="pre-workout"
                label="Pre-Workout"
                onChange={updateCheckbox}
              />
              <Form.Check
                type="checkbox"
                id="vitamins-supplements"
                label="Vitamins & Supplements"
                onChange={updateCheckbox}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>By Promotion</Accordion.Header>
            <Accordion.Body>
              <Form.Check
                type="checkbox"
                id="new_arrival"
                label="New Arrival"
                onChange={updateCheckbox}
              />
              <Form.Check
                type="checkbox"
                id="best_seller"
                label="Best Seller"
                onChange={updateCheckbox}
              />
              <Form.Check
                type="checkbox"
                id="clearance_sales"
                label="Clearance Sales"
                onChange={updateCheckbox}
              />
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="2">
      <Accordion.Header>Price</Accordion.Header>
      <Accordion.Body>Price slider </Accordion.Body>
    </Accordion.Item> */}
        </Accordion>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FilterForm;
