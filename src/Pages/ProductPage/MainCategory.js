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

  return (
    <div>
      <h3 className="py-5 m-0 text-center">
        {chosenLink.charAt(0).toUpperCase() + chosenLink.slice(1)} Products
      </h3>
      {!selectedProducts.every((item) => item === undefined) && (
        <div className="d-flex flex-wrap justify-content-center pb-5">
          {selectedProducts}
        </div>
      )}

      <Outlet></Outlet>
    </div>
  );
};

export default MainCategory;
