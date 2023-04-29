import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  let currentLink = '';
  const urlPath = useLocation();

  const crumbLinks = urlPath.pathname
    .split('/')
    .filter((crumb) => {
      return crumb !== '';
    })
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <LinkContainer to={currentLink}>
          <Breadcrumb.Item>
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
          </Breadcrumb.Item>
        </LinkContainer>
      );
    });

  return (
    <Breadcrumb className="position-absolute top-0 start-0 p-3">
      {crumbLinks}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
