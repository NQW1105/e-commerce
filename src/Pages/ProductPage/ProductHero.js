import { Image, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ProductSection from '../../images/products-web.jpg';
import Breadcrumbs from '../../components/Breadcrumb';

const ProductHero = () => {
  // console.log(props);

  return (
    <>
      <div className="position-relative shadow-sm">
        <Image
          src={ProductSection}
          style={{
            width: '100%',
            objectFit: 'cover',
            opacity: '60%',
          }}
        />
        {/* <Breadcrumbs /> */}
        <h1
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: '#3f3f46' }}
        >
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
