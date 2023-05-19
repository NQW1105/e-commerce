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
// Finalize color theme, padding, font size
// Fill footer section with more content
// Up and down chevron when navbar item selected
// Refactor context, scss, react, folder structure etc
// Delete index.css, products.json files

// Future Work:
// Those that are supposed to be server side rendering, split them from client side rendering.
// Include price slider to filter product search
// CRUD to track logged in user cart items using Firestore
// Search bar should still function even for product name without spaces
// search bar to also include brand name
// Change footer logo to colour version
// Toast bootstrap on first time page load
// Tracking system for customer order
// Include bootstrap placeholder & spinner while async function still loading
// Include more products; enough to include pagination
// Navbar Component : Make off-canvas responsive on full width
// when navbar toggle active make fix the order at md breakpoint and above
// Email user when they submit 'contact me' form
// Other worthy API to include

// References:
// https://preview.themeforest.net/item/supplero-supplement-store-woocommerce-theme/full_screen_preview/30130289?_ga=2.121149760.911221535.1683309406-2052243194.1682778762&_gac=1.49604626.1683309406.EAIaIQobChMI9umk-azn_QIVQSlyCh0Cdw-AEAAYASAAEgLh5fD_BwE
// https://preview.themeforest.net/item/nutritix-supplement-nutrition-woocommerce-theme/full_screen_preview/38300756?_ga=2.133609798.911221535.1683309406-2052243194.1682778762&_gac=1.242418998.1683309406.EAIaIQobChMI9umk-azn_QIVQSlyCh0Cdw-AEAAYASAAEgLh5fD_BwE
// https://themegenix.net/wp/suxnix/
// muscletech
// optimum nutrition
// GNC
// LAC
// themeforest
