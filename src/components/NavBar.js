import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../images/no-pain-no-gain.png';
import { Person, Cart, Search, Outlet } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-bootstrap';

// TO DO LIST :
// Decide breakpoint and refactor all the 'expand'
// Refactor component prop
// Standardize padding/spacing on navbar

function NavBar() {
  const expand = 'md';

  return (
    <Navbar key={expand} bg="light" expand={expand} className="">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

        <LinkContainer to="home">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="88"
              height="88"
              className="d-inline-block align-top"
              alt="Brand logo"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="px-2"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Welcome !
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <InputGroup className="order-md-4 w-auto">
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

              <NavDropdown
                className="order-md-1"
                title="Promotions"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <LinkContainer to="promotion">
                  <NavDropdown.Item>New Arrivals</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="promotion2">
                  <NavDropdown.Item>Best Sellers</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="promotion3">
                  <NavDropdown.Item>Clearance Sales</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown
                className="order-md-2"
                title="Products"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <LinkContainer to="product">
                  <NavDropdown.Item>Creatine Monohydrates</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown
                  className="px-2"
                  title="Pre-Workout"
                  id=""
                  drop="end"
                >
                  <LinkContainer to="product2">
                    <NavDropdown.Item>BCAA</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="product3">
                    <NavDropdown.Item>Energy Drinks</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown
                  className="px-2"
                  title="Protein Powder"
                  id=""
                  drop="end"
                >
                  <LinkContainer to="product4">
                    <NavDropdown.Item>Whey Protein</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="product5">
                    <NavDropdown.Item>Whey Protein Isolates</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="product6">
                    <NavDropdown.Item>Vegan Protein</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </NavDropdown>
              <LinkContainer to="contact">
                <Nav.Link className="order-md-3" href="contact">
                  Contact Us
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className="d-flex ">
          <Person size={45} className="px-2" />
          <Cart size={41} className="px-2" />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
