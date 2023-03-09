import ProductCard from '../../components/ProductCard';
import data from '../../products.json';

const NewArrival = () => {
  // console.log(data);
  // Use product card component

  const newProducts = data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.new === true) {
        return <ProductCard productObj={product} />;
      }
    });
  });

  return (
    <div>
      <h3>New Arrival</h3>
      {newProducts}
    </div>
  );
};

export default NewArrival;
