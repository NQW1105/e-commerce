import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

// General Pages
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';

// Product Related Pages
import ProductHero from '../Pages/ProductPage/ProductHero';
import AllProduct from '../Pages/ProductPage/AllProduct';
import ProductHighlight from '../Pages/ProductPage/ProductHighlight';
import CartOverview from '../Pages/ProductPage/CartOverview';

// Footer Related Pages
import Terms from '../Pages/FooterSection/Terms';
import AboutUs from '../Pages/FooterSection/AboutUs';
import RefundPolicy from '../Pages/FooterSection/RefundPolicy';

// User Related Pages
import SignIn from '../Pages/UserLogin/SignIn';
import SignUp from '../Pages/UserLogin/SignUp';
import ResetPassword from '../Pages/UserLogin/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'promotion',
        element: <ProductHero />,
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
        element: <ProductHero />,
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
