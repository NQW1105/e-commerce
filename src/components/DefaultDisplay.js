import ProductCard from './ProductCard';
import { Col } from 'react-bootstrap';

const DefaultDisplay = ({ currentRoute, products, checkboxData }) => {
  const categoryGroup = ['protein', 'vitamins-supplements', 'pre-workout'];
  const promotionGroup = ['best_seller', 'new_arrival', 'clearance_sales'];

  return (
    <>
      {(currentRoute === 'product' || currentRoute === 'promotion') &&
        products.map((product) => {
          return (
            <Col xs={6}>
              <ProductCard key={product.id} productObj={product} />
            </Col>
          );
        })}

      {/* Render if route belongs to any category */}
      {(categoryGroup.includes(currentRoute) ||
        categoryGroup.includes('vitamins-supplements')) &&
        products
          .filter((product) => {
            if (product.stripe_metadata_category === currentRoute) {
              return product;
            } else if (
              currentRoute === 'creatine' &&
              product.stripe_metadata_category === 'vitamins-supplements'
            ) {
              return product;
            }
          })
          .map((product) => {
            return (
              <Col xs={6}>
                <ProductCard key={product.id} productObj={product} />
              </Col>
            );
          })}

      {/* Render if route belongs to any promotion */}
      {promotionGroup.includes(currentRoute) &&
        products
          .filter((product) => {
            if (product.promotion[currentRoute] === true) {
              return product;
            }
          })
          .map((product) => {
            return (
              <Col xs={6}>
                <ProductCard key={product.id} productObj={product} />
              </Col>
            );
          })}
    </>
  );
};

export default DefaultDisplay;
