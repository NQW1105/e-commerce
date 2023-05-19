import React, { useState } from 'react';
import CompanyBrand from '../../images/Gainz.png';
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
      bg="alt-primary"
      expand="lg"
      className="border-bottom border-1 border-secondary shadow px-3 px-lg-5 "
    >
      <Navbar.Toggle onClick={openSideNav} className="m-0" />

      <LinkContainer to="/">
        <Navbar.Brand className="m-0">
          <img
            src={CompanyBrand}
            height="55"
            className="d-inline-block align-top p-0"
            alt="Brand logo"
          />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Offcanvas
        placement="start"
        show={showNav}
        onHide={closeSideNav}
        className="px-3 bg-alt-primary text-white"
      >
        <Offcanvas.Header closeButton className="py-5">
          <Offcanvas.Title>Welcome !</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="py-0">
          <Nav className="justify-content-end flex-grow-1 fw-bold navbar-font-size">
            <LinkContainer to="/promotion">
              <Nav.Link href="promotions" className="order-lg-1">
                Promotions
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link href="products" className="order-lg-2">
                Products
              </Nav.Link>
            </LinkContainer>

            {/* <NavDropdown className="order-lg-1" title="Promotions">
              <LinkContainer to="/promotion/new_arrival">
                <NavDropdown.Item className="py-2 fs-6 text-center">
                  New Arrivals
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/promotion/best_seller">
                <NavDropdown.Item className="py-2 fs-6 text-center">
                  Best Sellers
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/promotion/clearance_sales">
                <NavDropdown.Item className="py-2 fs-6 text-center">
                  Clearance Sales
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown className="order-lg-2" title="Products">
              <LinkContainer to="/product/creatine">
                <NavDropdown.Item className="py-2  px-0 fs-6 text-center">
                  Creatine
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/product/pre-workout">
                <NavDropdown.Item className="py-2  px-0 fs-6 text-center">
                  Pre - Workout
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/product/protein">
                <NavDropdown.Item className="py-2 px-0 fs-6 text-center">
                  Proteins
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> */}

            <LinkContainer to="contact">
              <Nav.Link className="order-lg-3" href="contact">
                Contact Us
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>

      <div className="d-flex justify-content-end align-items-center">
        <SearchBar />
        <CartOrder />
        <UserIcon />
      </div>
    </Navbar>
  );
}

export default NavBar;
