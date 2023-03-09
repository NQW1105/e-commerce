import data from '../../products.json';
import ProductCard from '../../components/ProductCard';

const ProteinPage = () => {
  const proteinProducts = data.products.map((category) => {
    if (category.protein !== undefined) {
      return category.protein.map((product) => {
        return <ProductCard productObj={product} />;
      });
    }
  });

  return (
    <div>
      <h3>Protein Products</h3>
      {proteinProducts}
    </div>
  );
};

export default ProteinPage;
