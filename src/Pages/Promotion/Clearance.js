import data from '../../products.json';
import ProductCard from '../../components/ProductCard';

const ClearanceSales = () => {
  // console.log(data);

  const oldProducts = data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.clearance === true) {
        return <ProductCard productObj={product} />;
      }
    });
  });

  return (
    <div>
      <h3>Clearance Sales</h3>
      {oldProducts}
    </div>
  );
};

export default ClearanceSales;
