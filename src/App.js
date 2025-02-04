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
import SharedLayout from './components/SharedLayout.jsx';
import FAQ from './components/FAQ.jsx';
import Pricing from './components/Pricing.jsx';
import Trial from './components/Trial.jsx';
import Footer from './pages/Footer.jsx';
import Movies from './pages/Movies.jsx';
import MovieList from './components/MovieList.jsx';
import Subscription from './pages/Subscription.jsx';
import Support from './pages/Support.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Shows from './pages/Shows.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';



const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />

      <Route path='subscriptions' element={<Subscription />} />
      <Route path='movies' element={<Movies />} />
      <Route path='support' element={<Support />} />
      <Route path='details' element={<MovieDetails />} />
      <Route path='details2' element={<Shows />} />

    </Route>
  )
)

function App() {
 
  return <RouterProvider router={main} />;
}

export default App;
