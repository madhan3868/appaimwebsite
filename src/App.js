import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SupportAreas from './components/SupportAreas';
import StockManagement from './components/StockManagement';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <SupportAreas />
      <StockManagement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
