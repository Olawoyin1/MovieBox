import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from './pages/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import FAQ from './components/FAQ.jsx';
import Pricing from './components/Pricing.jsx';
import Trial from './components/Trial.jsx';
import Footer from './pages/Footer.jsx';
import Movies from './pages/Movies.jsx';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function App() {
 
  return (
    <>
      <Navbar />
      <Movies />
      {/* <Hero />
      <Services />
      <FAQ />
      <Pricing />
      <Trial />
      <Footer /> */}
    </>
  )
}

export default App;
