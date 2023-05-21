import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { AppContext } from './context/AppContext';

function App() {
  const [totalOrder, setTotalOrder] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productRef = await getDocs(collection(db, 'products'));
      const products = productRef.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <div className="App bg-alt-bg">
      <Helmet>
        <title>Supplement Store</title>
        <meta
          name="description"
          content="E-commerce store selling bodybuilding products"
        />
      </Helmet>
      <AppContext.Provider value={{ totalOrder, setTotalOrder, products }}>
        <NavBar />
        <Outlet />
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

// TO DO LIST:
// Make product name visible on mobile for product slider and product filtering page
// Make product page banner presentable on mobile
// Adjust product slider arrow
// Refactor context, scss, react, folder structure etc, so they look clean and readable
// Delete or separate unnecessary files like index.css, products.json files
// Update readme to highlight project
// Selecting promotion tab on navbar or (new-arrival, best-seller, clearance-sales) button should filter product list
// Those that are supposed to be server side rendering, split them from client side rendering using firebase
// CRUD...Logged in user should be able to have their cart items saved; Especially when checkout failed/canceled
// Include bootstrap placeholder & spinner while async function still loading

// Future Work:
// Include more products and other bodybuilding brand; enough to include pagination
// Fill footer section with more content
// Replace footer logo with presentable ones
// Contact us form should email website owner while sender should received notification/email ticket
// Price range and brand filter
// Include more flavor based on product and supplement fact should be updated accordingly
// Option to switch delivery option; this should update the order total price
// Create own react slider instead of using npm package... Current package made too many get request to load
// Search bar should still function even for product name without spaces
// Search bar to also include brand name
// Toast bootstrap on first time page load
// Tracking/order ID system for customer order

// References:
// https://preview.themeforest.net/item/supplero-supplement-store-woocommerce-theme/full_screen_preview/30130289?_ga=2.121149760.911221535.1683309406-2052243194.1682778762&_gac=1.49604626.1683309406.EAIaIQobChMI9umk-azn_QIVQSlyCh0Cdw-AEAAYASAAEgLh5fD_BwE
// https://preview.themeforest.net/item/nutritix-supplement-nutrition-woocommerce-theme/full_screen_preview/38300756?_ga=2.133609798.911221535.1683309406-2052243194.1682778762&_gac=1.242418998.1683309406.EAIaIQobChMI9umk-azn_QIVQSlyCh0Cdw-AEAAYASAAEgLh5fD_BwE
// https://themegenix.net/wp/suxnix/
// muscletech
// optimum nutrition
// GNC
// LAC
// themeforest
