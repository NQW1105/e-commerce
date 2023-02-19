import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from './no-pain-no-gain.png';
import { Person, Cart, Search } from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

// Decide breakpoint and refactor all the 'expand'
// On small screen, make logo center, hamburger left and user right
// Include nest items for list

function NavBar() {
  const expand = 'md';

  return (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        {/* fluid */}
        <Row>
          {/* xs="auto" */}
          <Col>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Col>
          <Col md={{ span: 3, order: 1 }}>
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                width="88"
                height="88"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>
          <Col md={{ span: 3, order: 2 }}>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="px-2"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Welcome !
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Promotions"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                  <InputGroup className="w-auto">
                    <InputGroup.Text id="basic-addon1">
                      <Search size={18} />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Search Products"
                      aria-label="SearchField"
                      aria-describedby="basic-addon1"
                      className=""
                    />
                  </InputGroup>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Col>
          <Col md={{ span: 3, order: 3 }}>
            <div className="d-flex ">
              <Person size={45} className="px-2" />
              <Cart size={41} className="px-2" />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
