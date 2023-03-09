import data from '../../products.json';
import ProductCard from '../../components/ProductCard';
import { Outlet, useLocation } from 'react-router-dom';

const MainCategory = () => {
  const urlPath = useLocation();
  const linkArray = urlPath.pathname.split('/').filter((item) => {
    return item !== '';
  });

  let chosenLink = linkArray[linkArray.length - 1];
  const selectedProducts = data.products.map((category) => {
    if (category[chosenLink] !== undefined) {
      return category[chosenLink].map((product) => {
        return <ProductCard productObj={product} />;
      });
    }
  });

  // include condition for running loop on products
  return (
    <div>
      <h3>
        {chosenLink.charAt(0).toUpperCase() + chosenLink.slice(1)} Products
      </h3>
      {selectedProducts}
      <Outlet></Outlet>
    </div>
  );
};

export default MainCategory;
