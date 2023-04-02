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
      <h3 className="py-5 m-0 text-center">All Products</h3>
      <div className="d-flex flex-wrap justify-content-center pb-5">
        {allProduct}
      </div>
    </div>
  );
};

export default AllProduct;
