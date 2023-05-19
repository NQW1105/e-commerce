import React, { useContext, useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import { Form, Offcanvas, Row, Col, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import SearchResults from '../SearchFeature/SearchResults';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const products = useContext(AppContext).products;

  const handleSearch = () => setShowSearch(!showSearch);

  const trackSearch = (event) => setSearch(event.target.value);

  const resetSearch = () => setSearch('');

  return (
    <>
      <Button onClick={handleSearch} className="p-2 btn-nav-custom">
        <Search size={25} />
      </Button>
      <Offcanvas
        show={showSearch}
        onHide={handleSearch}
        placement="top"
        className="h-100 bg-alt-bg"
      >
        <Offcanvas.Header closeButton className="bg-alt-primary">
          <Offcanvas.Title className="pe-3 my-3 w-100">
            <Form.Control
              placeholder="Search for products"
              value={search}
              onChange={trackSearch}
              // className="w-100"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="m-0"></hr>
        <Offcanvas.Body className="p-0 bg-alt-background">
          <Row className="mx-0 h-100">
            {search && (
              <Col md={9} className="mx-0 px-0 h-100 order-md-2">
                <SearchResults
                  search={search}
                  resetSearch={resetSearch}
                  products={products}
                />
              </Col>
            )}
            <Col md={3} className="px-5 order-md-1 top-divider border-end">
              <h5 className="my-4">Popular Searches</h5>
              <p className="">whey protein</p>
              <p className="">creatine</p>
              <p className="">pre-workout</p>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SearchBar;
