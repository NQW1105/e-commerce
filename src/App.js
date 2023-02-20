import { Helmet } from 'react-helmet';

// React-Bootstrap Components
import NavBar from './components/NavBar';

// React Components
import Promotion from './Pages/Promotion';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

// Some sample or inspiration websites
// muscletech.com
// gnc.com
// optimumnutrition.com
// tigerfitness.com
// bodybuilding.com

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
      {/* <Promotion />
      <Product />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
