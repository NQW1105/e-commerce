import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Promotion from './Pages/Promotion';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Error from './Pages/Error';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
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
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   <Route path="/" element={<App />}>
//     <Route index element={<Home />} />
//     <Route path="contact" element={<Contact />} />
//   </Route>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
