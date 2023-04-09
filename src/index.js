import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './custom.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import App from './App';
import ProductHighlight from './components/ProductHighlight';

// Pages
import Home from './Pages/Home';
import Promotion from './Pages/Promotion/Promotion';
import NewArrival from './Pages/Promotion/NewArrival';
import BestSeller from './Pages/Promotion/BestSeller';
import ClearanceSales from './Pages/Promotion/Clearance';
import Product from './Pages/ProductPage/Product';
import AllProduct from './Pages/ProductPage/AllProduct';
import MainCategory from './Pages/ProductPage/MainCategory';
import SubCategory from './Pages/ProductPage/SubCategory';
import Terms from './Pages/FooterSection/Terms';
import AboutUs from './Pages/FooterSection/AboutUs';
import RefundPolicy from './Pages/FooterSection/RefundPolicy';
import CartOverview from './Pages/CartOverview';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'promotion',
        element: <Promotion />,
        children: [
          {
            path: 'new-arrival',
            element: <NewArrival />,
          },
          {
            path: 'best-seller',
            element: <BestSeller />,
          },
          {
            path: 'clearance',
            element: <ClearanceSales />,
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
            element: <MainCategory />,
          },
          {
            path: 'pre-workout',
            element: <MainCategory />,
            children: [
              {
                path: 'BCAA',
                element: <SubCategory />,
              },
              {
                path: 'energy',
                element: <SubCategory />,
              },
            ],
          },
          {
            path: 'protein',
            element: <MainCategory />,
            children: [
              {
                path: 'whey',
                element: <SubCategory />,
              },
              {
                path: 'whey-isolates',
                element: <SubCategory />,
              },
              {
                path: 'vegan',
                element: <SubCategory />,
              },
            ],
          },
        ],
        errorElement: <Error />,
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
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
