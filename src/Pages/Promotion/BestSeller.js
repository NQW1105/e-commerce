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
      <h3>Best Seller</h3>
      {bestSellProducts}
    </div>
  );
};

export default BestSeller;
