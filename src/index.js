import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import App from './App';
import ProductHighlight from './components/ProductHighlight';

// Pages

import Home from './Pages/Home';
import Promotion from './Pages/Promotion';
import NewArrival from './Pages/Promotion/NewArrival';
import BestSeller from './Pages/Promotion/BestSeller';
import ClearanceSales from './Pages/Promotion/Clearance';
import Product from './Pages/Product';
import AllProduct from './Pages/ProductPage/AllProduct';
import CreatinePage from './Pages/ProductPage/CreatinePage';
import PreworkoutPage from './Pages/ProductPage/PreworkoutPage';
import ProteinPage from './Pages/ProductPage/ProteinPage';
import Terms from './Pages/FooterSection/Terms';
import AboutUs from './Pages/FooterSection/AboutUs';
import RefundPolicy from './Pages/FooterSection/RefundPolicy';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import MainCategory from './Pages/ProductPage/MainCategory';
import SubCategory from './Pages/ProductPage/SubCategory';

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
