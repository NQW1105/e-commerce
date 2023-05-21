// import { db } from '../../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
import { useState, useContext, useEffect } from 'react';
import { Button, Row, Col, Nav } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import { Filter } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProductCard from '../../components/ProductCard';
import FilterForm from '../../components/FilterForm';
import DefaultDisplay from '../../components/DefaultDisplay';

const AllProduct = () => {
  const products = useContext(AppContext).products;
  const currentUrl = useLocation()
    .pathname.split('/')
    .filter((route) => {
      return route !== '';
    });
  const currentRoute = currentUrl[currentUrl.length - 1];

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkboxData, setCheckboxData] = useState({
    protein: false,
    'pre-workout': false,
    'vitamins-supplements': false,
    best_seller: false,
    clearance_sales: false,
    new_arrival: false,
  });

  const closeFilter = () => setShowFilter(false);
  const openFilter = () => setShowFilter(true);
  const updateCheckbox = (event) => {
    const { id, checked } = event.target;
    setCheckboxData((checkbox) => ({ ...checkbox, [id]: checked }));
  };

  useEffect(() => {
    // Check if any category got selected
    const categoryProduct = products.filter((product) => {
      if (checkboxData[product.stripe_metadata_category] === true)
        return product;
    });

    // Check if any promotion got selected
    const promotion = products.filter((product) => {
      let includeProduct = null;
      const promoCategory = Object.keys(product.promotion);
      promoCategory.map((promo) => {
        if (checkboxData[promo] === true && product.promotion[promo] === true)
          return (includeProduct = true);
      });
      if (includeProduct) return product;
    });

    if (categoryProduct.length !== 0 && promotion.length !== 0) {
      const update = categoryProduct.filter((catProduct) => {
        let includeProduct = null;
        const promoCategory = Object.keys(catProduct.promotion);
        promoCategory.map((promo) => {
          if (
            checkboxData[promo] === true &&
            catProduct.promotion[promo] === true
          ) {
            includeProduct = true;
          }
        });
        if (includeProduct) return catProduct;
      });
      setFilteredProducts(update);
    } else if (categoryProduct.length !== 0) {
      setFilteredProducts(categoryProduct);
    } else if (promotion.length !== 0) {
      setFilteredProducts(promotion);
    }
  }, [checkboxData]);

  return (
    <>
      {/* Consider making component for category tabs */}
      <Nav
        activeKey="/home"
        variant="tabs"
        fill
        className="bg-alt-bg "
        // style={{ fontWeight: '500' }}
      >
        <Nav.Item>
          <LinkContainer to="/product" className="">
            <Nav.Link className="filter-nav-link">All</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/product/protein">
            <Nav.Link className="filter-nav-link">Protein</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/product/pre-workout">
            <Nav.Link className="filter-nav-link">Pre-Workout</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/product/creatine">
            <Nav.Link className="filter-nav-link">Others</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      <Button
        variant="alt-action"
        className="d-lg-none w-100"
        onClick={openFilter}
        style={{ borderRadius: 0 }}
      >
        <Filter /> Filter
      </Button>
      <Row className="m-0 p-5">
        <Col lg={4} className="px-lg-0">
          <FilterForm
            showFilter={showFilter}
            closeFilter={closeFilter}
            updateCheckbox={updateCheckbox}
          />
        </Col>
        <Col
          xs={12}
          lg={8}
          className="d-flex flex-wrap justify-content-center pb-5"
        >
          <Row>
            {/* Check if any checkbox got checked. Render all product if none checked */}
            {Object.keys(checkboxData).every(
              (item) => checkboxData[item] === false
            ) ? (
              <DefaultDisplay
                currentRoute={currentRoute}
                products={products}
                checkboxData={checkboxData}
              />
            ) : (
              filteredProducts.map((product) => {
                return (
                  <Col xs={6}>
                    <ProductCard key={product.id} productObj={product} />
                  </Col>
                );
              })
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AllProduct;
