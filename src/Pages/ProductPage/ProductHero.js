import { Image, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProductSection from '../../images/products.jpg';
import Breadcrumbs from '../../components/Breadcrumb';

const ProductHero = () => {
  // console.log(props);

  return (
    <>
      <div className="position-relative">
        <Image
          src={ProductSection}
          className="opacity-75"
          style={{
            height: '50vh',
            width: '100%',
            objectFit: 'cover',
            // opacity: '90%',
          }}
        ></Image>
        <Breadcrumbs />
        <h1 className="position-absolute top-50 start-50 translate-middle text-white">
          Products
        </h1>
      </div>
      {/* <Nav
        activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        variant="tabs"
        fill
      >
        <Nav.Item>
          <Nav.Link>All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Protein</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Pre-Workout</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Vitamins & Supplements</Nav.Link>
        </Nav.Item>
      </Nav> */}

      <Outlet></Outlet>
    </>
  );
};

export default ProductHero;
