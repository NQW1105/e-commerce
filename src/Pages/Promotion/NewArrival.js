import ProductCard from '../../components/ProductCard';
import data from '../../products.json';

const NewArrival = () => {
  const newProducts = data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.new === true) {
        return <ProductCard productObj={product} />;
      }
    });
  });

  return (
    <div>
      <h3 className="py-5 m-0 text-center">New Arrival</h3>
      <div className="d-flex flex-wrap justify-content-center pb-5">
        {newProducts}
      </div>
    </div>
  );
};

export default NewArrival;
