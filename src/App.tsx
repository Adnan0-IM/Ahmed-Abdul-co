import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import RouteToTop from "./components/RouteToTop";


function App() {
  return (
    <>
      <RouteToTop />
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            
            </Routes>
          </Router>

          </>
    
  );
}

export default App;
