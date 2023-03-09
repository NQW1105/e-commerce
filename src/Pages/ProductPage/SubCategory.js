import data from '../../products.json';
import ProductCard from '../../components/ProductCard';
import { useLocation } from 'react-router-dom';

const SubCategory = () => {
  const urlPath = useLocation();
  const linkArray = urlPath.pathname.split('/').filter((item) => {
    return item !== '';
  });

  let chosenLink = linkArray[linkArray.length - 1];
  const selectedProducts = data.products.map((category) => {
    return Object.values(category)[0].map((product) => {
      if (product.subCategory === chosenLink) {
        return <ProductCard productObj={product} />;
      }
    });
  });

  return <div>{selectedProducts}</div>;
};

export default SubCategory;
