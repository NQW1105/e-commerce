import React, { useState, useEffect, useContext } from 'react';
import CompanyBrand from '../images/no-pain-no-gain.png';
import { Person, Cart, Search } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Container,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  InputGroup,
  Button,
  Badge,
} from 'react-bootstrap';
import CartOrder from './CartOrder';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { CartContext } from '../App';
import UserPopUp from '../components/UserPopup';

// TO DO LIST :
// Make off-canvas responsive on full width
// when navbar toggle active make fix the order at md breakpoint and above

function NavBar() {
  const [totalOrder, setTotalOrder] = useContext(CartContext);

  const [userLogin, setUserLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showNavCanvas, setShowNavCanvas] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseNavCanvas = () => setShowNavCanvas(false);
  const handleShowNavCanvas = () => setShowNavCanvas(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User logged in');
        setUserLogin(true);
        // pass user as props to UserPopup
      } else {
        console.log('No user');
        setUserLogin(false);
      }
    });
  }, []);

  return (
    <Navbar
      // sticky="top"
      bg="custom-secondary"
      expand="lg"
      className="shadow-sm"
    >
      <Container fluid className="px-5">
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-md`}
          onClick={handleShowNavCanvas}
        />
        <LinkContainer to="/">
          <Navbar.Brand className="m-0">
            <img
              src={CompanyBrand}
              width="88"
              height="88"
              className="d-inline-block align-top"
              alt="Brand logo"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Offcanvas
          placement="start"
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          className="px-3 bg-custom-secondary"
          onHide={handleCloseNavCanvas}
          show={showNavCanvas}
        >
          <Offcanvas.Header closeButton className="py-5">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Welcome !
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="py-0 ">
            <Nav className="justify-content-end flex-grow-1">
              <InputGroup className="w-auto mb-4 mb-lg-0 px-lg-4 order-lg-4 ">
                <InputGroup.Text id="basic-addon1">
                  <Search size={18} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Products"
                  aria-label="SearchField"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <NavDropdown
                id={`offcanvasNavbarDropdown-expand-md`}
                className="order-lg-1 "
                title="Promotions"
              >
                <LinkContainer to="/promotion/new-arrival">
                  <NavDropdown.Item>New Arrivals</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/promotion/best-seller">
                  <NavDropdown.Item>Best Sellers</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/promotion/clearance">
                  <NavDropdown.Item>Clearance Sales</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown
                id={`offcanvasNavbarDropdown-expand-md`}
                className="order-lg-2"
                title="Products"
              >
                <LinkContainer to="product/creatine">
                  <NavDropdown.Item>Creatine </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown
                  className="py-0 px-3 px-lg-2"
                  title="Pre-Workout"
                  drop="end"
                >
                  <LinkContainer to="product/pre-workout/BCAA">
                    <NavDropdown.Item>BCAA</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="product/pre-workout/energy">
                    <NavDropdown.Item>Energy Drinks</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown
                  className="py-0 px-3 px-lg-2"
                  title="Protein Powder"
                  drop="end"
                >
                  <LinkContainer to="/product/protein/whey">
                    <NavDropdown.Item>Whey Protein</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/product/protein/whey-isolates">
                    <NavDropdown.Item>Whey Protein Isolates</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/product/protein/vegan">
                    <NavDropdown.Item>Vegan Protein</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </NavDropdown>
              <LinkContainer to="contact">
                <Nav.Link
                  className="order-lg-3 text-custom-text"
                  href="contact"
                >
                  Contact Us
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className="d-flex gap-2 align-items-center">
          <Button
            onClick={handleShowCart}
            className="p-0 bg-custom-secondary border-custom-secondary text-custom-text position-relative"
          >
            <Cart size={41} className="px-2 pointer-events-none" />
            {!(totalOrder.length === 0) && (
              <Badge
                bg="secondary"
                className="position-absolute bg-danger rounded-circle cart-quantity translate-middle"
              >
                {totalOrder.length}
              </Badge>
            )}
          </Button>
          {userLogin ? (
            <UserPopUp />
          ) : (
            <LinkContainer to="sign-in">
              <Button className="p-0 bg-custom-secondary border-custom-secondary text-custom-text">
                <Person size={32} className="cursor-pointer" />
              </Button>
            </LinkContainer>
          )}

          <Offcanvas
            scroll
            show={showCart}
            placement={'end'}
            onHide={handleCloseCart}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Your Order</Offcanvas.Title>
            </Offcanvas.Header>
            <hr className="my-0"></hr>
            <Offcanvas.Body>
              <CartOrder addedProducts={totalOrder} />
            </Offcanvas.Body>
            <hr className="my-0"></hr>
            <LinkContainer to="/check-out" style={{ borderRadius: '0' }}>
              <Button className="mx-4 my-5 bg-custom-primary border-custom-primary fw-bold">
                Checkout
              </Button>
            </LinkContainer>
          </Offcanvas>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
