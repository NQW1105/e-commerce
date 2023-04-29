import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './components/NavBar';
import Footer from './Pages/FooterSection/Footer';
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
    <div className="App bg-custom-bg">
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
// Product page with checkboxes for promotions and category filter
// ErrorBoundary for react...
// Finalize color theme, padding, font size
// Make hero section presentable
// Footer page : Hover effect on links/symbols
// Clicking search/cart button shift brand logo on small screen, fix that...
// Refactor context if possible
// Learn how to use SASS and customize bootstrap the right way
// Merge index.css to custom.scss

// Future Work:
// Include price slider to filter product search
// CRUD for cart system using Firestore
// search should include name without spaces
// search to also include brand name
// Change footer logo to colour version
// Toast bootstrap on first time page load
// Include bootstrap placeholder & spinner while async function still loading
// Include more products; enough to include pagination
// Navbar Component : Make off-canvas responsive on full width
// when navbar toggle active make fix the order at md breakpoint and above
// Email user when they submit 'contact me' form
// Other worthy API to include

// References:
// muscletech
// optimum nutrition
// GNC
// LAC
// themeforest
