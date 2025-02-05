import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home.jsx";
import SharedLayout from './components/SharedLayout.jsx';
import Movies from './pages/Movies.jsx';
import Subscription from './pages/Subscription.jsx';
import Support from './pages/Support.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Shows from './pages/Shows.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop.jsx';



// const main = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<SharedLayout />}>
//       <Route index element={<Home />} />

//       <Route path='subscriptions' element={<Subscription />} />
//       <Route path='movies' element={<Movies />} />
//       <Route path='support' element={<Support />} />
//       <Route path='details' element={<MovieDetails />} />
//       <Route path='details2' element={<Shows />} />

//     </Route>
//   )
// )

function App() {
 
  return  (
    
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path='subscriptions' element={<Subscription />} />
        <Route path='movies' element={<Movies />} />
        <Route path='support' element={<Support />} />
        <Route path='details' element={<MovieDetails />} />
        <Route path='details2' element={<Shows />} />

        </Route>
      </Routes>
    </Router>
  ) ;
}

export default App;
