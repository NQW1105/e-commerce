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
      <h3 className="py-5 m-0 text-center">Clearance Sales</h3>
      <div className="d-flex flex-wrap justify-content-center pb-5">
        {oldProducts}
      </div>
    </div>
  );
};

export default ClearanceSales;
