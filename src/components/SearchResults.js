import { Row, Col } from 'react-bootstrap';
import FailedSearch from './FailedSearch';
import MatchedProduct from './MatchedSearch';

const SearchResults = (props) => {
  const search = props.search;
  const resetSearch = props.resetSearch;
  const products = props.products;

  //  To check whether search field matches with any product
  const searchedProducts = products.filter((product) => {
    return product.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return (
    <>
      {searchedProducts.length === 0 ? (
        <FailedSearch resetSearch={resetSearch} />
      ) : (
        <>
          <h5 className="p-3 my-0 text-center left-divider">
            Showing results for {search}
          </h5>
          <Row className="mx-0 left-divider">
            <Col xs={3} className="text-center px-0">
              <p className="mt-3">Products</p>
            </Col>
            <Col xs={7} className="px-0"></Col>
            <Col xs={2} className="text-center px-0">
              <p className="mt-3">Price</p>
            </Col>
          </Row>
          {searchedProducts.map((product) => {
            return <MatchedProduct key={product.id} product={product} />;
          })}
        </>
      )}
    </>
  );
};

export default SearchResults;
