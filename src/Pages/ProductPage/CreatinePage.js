import data from '../../products.json';
import ProductCard from '../../components/ProductCard';

const CreatinePage = () => {
  const creatineProducts = data.products.map((category) => {
    if (category.creatine !== undefined) {
      return category.creatine.map((product) => {
        return <ProductCard productObj={product} />;
      });
    }
  });

  return (
    <div>
      <h3>Creatine</h3>
      {creatineProducts}
    </div>
  );
};

export default CreatinePage;
