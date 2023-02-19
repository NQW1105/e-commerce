import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

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
      <Footer />
    </div>
  );
}

export default App;
