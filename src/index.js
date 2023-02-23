import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// App Pages
import Promotion from './Pages/Promotion';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Error from './Pages/Error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Terms from './Pages/FooterSection/Terms';
import AboutUs from './Pages/FooterSection/AboutUs';
import RefundPolicy from './Pages/FooterSection/RefundPolicy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'promotion',
        element: <Promotion />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'contact',
        element: <Contact />,
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
        path: 'about-us',
        element: <AboutUs />,
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
