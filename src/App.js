import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import MovieList from './components/MovieList.jsx';
import Subscription from './pages/Subscription.jsx';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function App() {
 
  return (
    <>
      <Navbar />
      <Subscription />
      {/* <Movies />
      <MovieList/> */}
      <Trial />
      {/* <Hero />
      <Services />
      <FAQ />
      <Pricing />
      <Footer /> */}
    </>
  )
}

export default App;
