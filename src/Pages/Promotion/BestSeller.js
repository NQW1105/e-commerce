import data from '../../products.json';
import ProductCard from '../../components/ProductCard';

const BestSeller = () => {
  const bestSellProducts = data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.bestSell === true) {
        return <ProductCard productObj={product} />;
      }
    });
  });

  return (
    <div>
      <h3 className="py-5 m-0 text-center">Best Seller</h3>
      <div className="d-flex flex-wrap justify-content-center pb-5">
        {bestSellProducts}
      </div>
    </div>
  );
};

export default BestSeller;
