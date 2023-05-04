import { createBrowserRouter } from 'react-router-dom';

// Components
import App from '../App';
import ProductHighlight from '../components/ProductHighlight';

// Pages
import Home from '../Pages/Home';
import Product from '../Pages/ProductPage/Product';
import AllProduct from '../Pages/ProductPage/AllProduct';
import Terms from '../Pages/FooterSection/Terms';
import AboutUs from '../Pages/FooterSection/AboutUs';
import RefundPolicy from '../Pages/FooterSection/RefundPolicy';
import CartOverview from '../Pages/CartOverview';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import ResetPassword from '../Pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'promotion',
        element: <Product />,
        children: [
          {
            index: true,
            element: <AllProduct />,
          },
          {
            path: 'new_arrival',
            element: <AllProduct />,
          },
          {
            path: 'best_seller',
            element: <AllProduct />,
          },
          {
            path: 'clearance_sales',
            element: <AllProduct />,
          },
        ],
      },
      {
        path: 'product',
        element: <Product />,
        children: [
          {
            index: true,
            element: <AllProduct />,
          },
          {
            path: ':productId',
            element: <ProductHighlight />,
          },
          {
            path: 'creatine',
            element: <AllProduct />,
          },
          {
            path: 'pre-workout',
            element: <AllProduct />,
          },
          {
            path: 'protein',
            element: <AllProduct />,
          },
        ],
      },
      {
        path: 'check-out',
        element: <CartOverview />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'register',
        element: <SignUp />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'refund-policy',
        element: <RefundPolicy />,
      },
      {
        path: 'terms-conditions',
        element: <Terms />,
      },
      {
        // 404 or 'not found' page
        path: '*',
        element: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
