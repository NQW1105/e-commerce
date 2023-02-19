import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../images/no-pain-no-gain.png';
import { Person, Cart, Search } from 'react-bootstrap-icons';

// Decide breakpoint and refactor all the 'expand'
// Refactor component prop
// Standardize padding/spacing on navbar

function NavBar() {
  const expand = 'md';

  return (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="88"
            height="88"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

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
                <NavDropdown.Item href="#action3">
                  New Arrivals
                </NavDropdown.Item>
                <NavDropdown
                  className="px-2"
                  title="Best Sellers"
                  id="best-sellers"
                  drop="end"
                >
                  <NavDropdown.Item href="#action4">
                    Creatine Monohydrate
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Whey Protein
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Pre-Workout
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Clearance Sales
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="order-md-2"
                title="Products"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action4">
                  Creatine Monohydrates
                </NavDropdown.Item>
                <NavDropdown
                  className="px-2"
                  title="Pre-Workout"
                  id=""
                  drop="end"
                >
                  <NavDropdown.Item href="#action3">BCAA</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Energy Drinks
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="px-2"
                  title="Protein Powder"
                  id=""
                  drop="end"
                >
                  <NavDropdown.Item href="#action3">
                    Whey Protein
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Whey Protein Isolates
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Vegan Protein
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link className="order-md-3" href="#action2">
                Contact Us
              </Nav.Link>
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
