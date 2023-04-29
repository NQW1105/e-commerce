// import { db } from '../../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
import { useState, useContext, useEffect, useCallback } from 'react';
import {
  Button,
  Offcanvas,
  Accordion,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { useForm, useWatch } from 'react-hook-form';
import ProductCard from '../../components/ProductCard';
import { AppContext } from '../../context/AppContext';
import { Filter } from 'react-bootstrap-icons';

const AllProduct = () => {
  const { register, watch, handleSubmit } = useForm();

  const products = useContext(AppContext).products;
  const [showFilter, setShowFilter] = useState(false);
  // const [checkboxStatus, setCheckboxStatus] = useState(watch());
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const checkboxStatus = useWatch({ name: ['protein', 'pre-workout'] });
  // const checkboxStatus = watch();
  // console.log(checkboxStatus);

  const closeFilter = () => setShowFilter(false);
  const openFilter = () => setShowFilter(true);
  const updateCheckbox = (data) => {
    console.log(data);
  };

  // useEffect(() => {
  //   const status = Object.keys(checkboxStatus).some(
  //     (checkbox) => checkboxStatus[checkbox] === true
  //   );
  //   // console.log(status);

  //   // Check if any category got selected
  //   const categoryProduct = products.filter((product) => {
  //     if (checkboxStatus[product.stripe_metadata_category] === true)
  //       return product;
  //   });

  //   // Check if any promotion got selected
  //   const promotion = products.filter((product) => {
  //     let includeProduct = null;
  //     const promoCategory = Object.keys(product.promotion);
  //     promoCategory.map((promo) => {
  //       if (checkboxStatus[promo] === true && product.promotion[promo] === true)
  //         return (includeProduct = true);
  //     });
  //     if (includeProduct) return product;
  //   });

  //   // console.log('Begin effect');
  //   // console.log(checkboxStatus);
  //   // console.log(categoryProduct);
  //   // console.log(promotion);

  //   // console.log(filteredProducts);
  //   if (status === false) {
  //     setFilteredProducts(products);
  //   } else if (categoryProduct.length !== 0 && promotion.length !== 0) {
  //     const update = categoryProduct.filter((catProduct) => {
  //       let includeProduct = null;
  //       const promoCategory = Object.keys(catProduct.promotion);
  //       promoCategory.map((promo) => {
  //         if (
  //           checkboxStatus[promo] === true &&
  //           catProduct.promotion[promo] === true
  //         ) {
  //           includeProduct = true;
  //         }
  //       });
  //       if (includeProduct) return catProduct;
  //     });
  //     setFilteredProducts(update);
  //   } else if (categoryProduct.length !== 0) {
  //     setFilteredProducts(categoryProduct);
  //   } else if (promotion.length !== 0) {
  //     setFilteredProducts(promotion);
  //   }
  //   // console.log(filteredProducts);
  // }, [checkboxStatus]);
  // useEffect doesnt recognize checkboxStatus as dependency, need find ways to utilize watch() as state with setState method
  // OR rewrite every checkbox as state :(

  return (
    <div>
      <Button
        variant="primary"
        className="d-lg-none w-100"
        onClick={openFilter}
        style={{ borderRadius: 0 }}
      >
        <Filter /> Filter
      </Button>
      <Row className="m-0">
        <Col lg={4} className="px-lg-0 bg-white">
          <Offcanvas show={showFilter} onHide={closeFilter} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion flush alwaysOpen className="w-100">
                <h4 className="d-none d-lg-block p-3">Filters</h4>
                <Form>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>By Category</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check
                        type="checkbox"
                        id="protein"
                        label="Protein"
                        {...register('protein')}
                        onChange={handleSubmit(updateCheckbox)}
                      />
                      <Form.Check
                        type="checkbox"
                        id="pre-workout"
                        label="Pre-Workout"
                        {...register('pre-workout')}
                      />
                      <Form.Check
                        type="checkbox"
                        id="vitamins-supplements"
                        label="Vitamins & Supplements"
                        {...register('vitamins-supplements')}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>By Promotion</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check
                        type="checkbox"
                        id="new-arrival"
                        label="New Arrival"
                        {...register('new_arrival')}
                      />
                      <Form.Check
                        type="checkbox"
                        id="best-seller"
                        label="Best Seller"
                        {...register('best_seller')}
                      />
                      <Form.Check
                        type="checkbox"
                        id="clearance-sales"
                        label="Clearance Sales"
                        {...register('clearance_sales')}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Form>

                {/* <Accordion.Item eventKey="2">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>Price slider </Accordion.Body>
            </Accordion.Item> */}
              </Accordion>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col xs={12} lg={8} className="">
          <div className="d-flex flex-wrap justify-content-center pb-5">
            {/* {Object.keys(checkboxStatus).every(
              (item) => checkboxStatus[item] === false
            ) &&
              products.map((product) => {
                return <ProductCard key={product.id} productObj={product} />;
              })} */}
            {/* {filteredProducts &&
              products.map((product) => {
                return <ProductCard key={product.id} productObj={product} />;
              })} */}
            {/* {products
              .filter((product) => {
                if (checkboxStatus[product.stripe_metadata_category] === true)
                  return product;
              })
              .filter((product) => {
                let includeProduct = null;
                const promoCategory = Object.keys(product.promotion);
                promoCategory.map((promo) => {
                  if (
                    checkboxStatus[promo] === true &&
                    product.promotion[promo] === true
                  )
                    return (includeProduct = true);
                });
                if (includeProduct) return product;
              })
              .map((product) => {
                return <ProductCard key={product.id} productObj={product} />;
              })} */}
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} productObj={product} />;
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllProduct;
