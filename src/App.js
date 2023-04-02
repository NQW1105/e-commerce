// Modify page title and favicon
import { useState, createContext, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './Pages/FooterSection/Footer';

// TO DO LIST:
// Make hero section presentable
// Include CRUD (Modyfing cart orders, Seller Mode)
// Email user when they submit 'contact me' form
// Authentication/Security related
// Stripe/Paypal API to integrate payment
// Other worthy API to include
// Merge index.css to custom.scss
export const CartContext = createContext();

function App() {
  const [totalOrder, setTotalOrder] = useState([]);
  // console.log(totalOrder);

  return (
    <div className="App bg-custom-bg">
      <Helmet>
        <title>Supplement Store</title>
        <meta
          name="description"
          content="E-commerce store selling bodybuilding products"
        />
      </Helmet>
      <CartContext.Provider value={[totalOrder, setTotalOrder]}>
        <NavBar totalOrder={totalOrder} />
        <Outlet />
      </CartContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
