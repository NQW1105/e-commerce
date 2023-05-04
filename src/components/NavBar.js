import React, { useState } from 'react';
import CompanyBrand from '../images/no-pain-no-gain.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import CartOrder from './CartOrder';
import UserIcon from './UserIcon';
import SearchBar from './SearchBar';
// import { AppContext } from '../context/AppContext';
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';

function NavBar() {
  // const totalOrder = useContext(AppContext).totalOrder;
  const [showNav, setShowNav] = useState(false);
  const openSideNav = () => setShowNav(true);
  const closeSideNav = () => setShowNav(false);

  return (
    <Navbar
      // sticky="top"
      bg="custom-secondary"
      expand="lg"
      className="shadow-sm px-5 "
    >
      <Navbar.Toggle onClick={openSideNav} />

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
        show={showNav}
        onHide={closeSideNav}
        className="px-3 bg-custom-secondary"
      >
        <Offcanvas.Header closeButton className="py-5">
          <Offcanvas.Title>Welcome !</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="py-0 ">
          <Nav className="justify-content-end flex-grow-1">
            <NavDropdown className="order-lg-1 " title="Promotions">
              <LinkContainer to="/promotion/new_arrival">
                <NavDropdown.Item>New Arrivals</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/promotion/best_seller">
                <NavDropdown.Item>Best Sellers</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/promotion/clearance_sales">
                <NavDropdown.Item>Clearance Sales</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown className="order-lg-2" title="Products">
              <LinkContainer to="/product/creatine">
                <NavDropdown.Item>Creatine</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/product/pre-workout">
                <NavDropdown.Item>Pre - Workout</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/product/protein">
                <NavDropdown.Item>Proteins</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="contact">
              <Nav.Link className="order-lg-3 text-custom-text" href="contact">
                Contact Us
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>

      <div className="d-flex gap-2 align-items-center">
        <SearchBar />
        <CartOrder />
        <UserIcon />
      </div>
    </Navbar>
  );
}

export default NavBar;
