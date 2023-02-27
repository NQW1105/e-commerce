import { Helmet } from 'react-helmet';

// React-Bootstrap Components
import NavBar from './components/NavBar';

// React Components
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

// Some sample or inspiration websites
// muscletech.com
// gnc.com
// optimumnutrition.com
// tigerfitness.com
// bodybuilding.com

// Create fake cookie pop-up footer
// Sudden popup for 1st time loading page

// API to consider including
// Telegram or google email for contact form
// Create own for products
// Motivating bodybuilding quotes???
// Stripe/Paypal to integrate payment
// Authentication/Security related
// Guest able to create new account

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
