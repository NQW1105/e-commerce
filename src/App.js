// Modify page title and favicon
import { Helmet } from 'react-helmet';

import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// TO DO LIST:
// Include CRUD (Modyfing cart orders, Seller Mode)
// Fetch API for product database
// Telegram message or google email when user submit 'contact me' form
// Authentication/Security related
// Stripe/Paypal API to integrate payment
// Create fake cookie pop-up footer for 1st time loading

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Supplement Store</title>
        <meta
          name="description"
          content="E-commerce store selling bodybuilding products"
        />
      </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
