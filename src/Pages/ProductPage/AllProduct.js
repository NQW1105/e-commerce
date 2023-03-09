import data from '../../products.json';
import ProductCard from '../../components/ProductCard';

const AllProduct = () => {
  const allProduct = data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      return <ProductCard productObj={product} />;
    });
  });

  return (
    <div>
      <h3>All Products</h3>
      {allProduct}
    </div>
  );
};

export default AllProduct;
