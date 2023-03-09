import data from '../../products.json';
import ProductCard from '../../components/ProductCard';

const PreworkoutPage = () => {
  const preworkoutProducts = data.products.map((category) => {
    if (category.preworkout !== undefined) {
      return category.preworkout.map((product) => {
        return <ProductCard productObj={product} />;
      });
    }
  });

  return (
    <div>
      <h3>Pre-workout Products</h3>
      {preworkoutProducts}
    </div>
  );
};

export default PreworkoutPage;
