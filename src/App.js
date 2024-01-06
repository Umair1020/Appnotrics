import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Landingpage from "./landingpage/Landingpage";
import AboutUs from "./Aboutpage/About";
import OurTechnology from "./Technology/OurTechnology";
import Service from "./ServicePage/Service";
import Portfolio from "./Portfolio/Portfolio";
import Web from "./Portfolio/Portfolio-web";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} /> 
      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/technology" element={<OurTechnology />} /> 
      <Route path="/services" element={<Service />} /> 
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/web" element={<Web />} /> 
         </Routes>
  );
}
export default App;