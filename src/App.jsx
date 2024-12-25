import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import ContactUS from "./Components/ContactUS";
import ProspectList from "./Components/OurServices/ProspectList";
import OurServices from "./Components/OurServices/OurServices";
import CleansingData from "./Components/OurServices/CleansingData";
import MarketingEmail from "./Components/OurServices/MarketingViaEmail";
import VerificationOfData from "./Components/OurServices/VerificationOfData";
import CLevelList from "./Components/B2b/CLevelList";
import HealthcareEmailList from "./Components/B2b/HealthcareList";
import TechnologyList from "./Components/B2b/TechnologyList";
import Industries from "./Components/Industries";
import Reseller from "./Components/Reseller";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set default animation duration
      once: true,     // Whether animation should happen only once
    });
  }, []);


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      {/* Set the root URL "/" to render the Home component */}
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={ <ContactUS />} />
      <Route path="/Services" element={ <OurServices/>} />
      <Route path="/ProspectList" element={ <ProspectList/>} />
      <Route path="/cleansing-data" element={ <CleansingData/>} />
      <Route path="/marketing-via-email" element={ <MarketingEmail/>} />
      <Route path="/verification-of-data" element={ <VerificationOfData/>} />
      <Route path="/c-level-list" element={ <CLevelList/>} />
      <Route path="/healthcare-list" element={ <HealthcareEmailList/>} />
      <Route path="/technology-list" element={ <TechnologyList/>} />
      <Route path="/industries" element={ <Industries/>} />
      <Route path="/reseller" element={ <Reseller/>} />
  {/* You can also add additional routes here */}
    </Routes>
    <Footer></Footer>
    </>
    
  );
}

export default App;
