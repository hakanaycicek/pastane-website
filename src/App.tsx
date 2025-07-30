import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './contexts/ProductsContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AdminPanel from './pages/AdminPanel';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import ReturnPolicy from './pages/ReturnPolicy';

// Ana sayfa bileşeni
const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

function App() {
  return (
    <ProductsProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admintato" element={<AdminPanel />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
            <Route path="/kullanim-sartlari" element={<TermsOfService />} />
            <Route path="/cerez-politikasi" element={<CookiePolicy />} />
            <Route path="/iptal-iade" element={<ReturnPolicy />} />
          </Routes>
        </div>
      </Router>
    </ProductsProvider>
  );
}

export default App;