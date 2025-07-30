import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-amber-900 text-amber-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(0232) 123 45 67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>İzmir, Türkiye</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>09:00 - 22:00</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>✨ Taze ve Özel Lezzetler Her Gün!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">T</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Tat-o Pastahane</h1>
              <p className="text-sm text-amber-700">Geleneksel Lezzetler</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#ana-sayfa" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
              Ana Sayfa
            </a>
            <a href="#urunler" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
              Ürünler
            </a>
            <a href="#galeri" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
              Galeri
            </a>
            <a href="#hakkimizda" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
              Hakkımızda
            </a>
            <a href="#haberler" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
              Haberler
            </a>
            <a href="#iletisim" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
              İletişim
            </a>
          </div>

          {/* WhatsApp Order Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Sipariş
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-amber-900 hover:text-amber-600 hover:bg-amber-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-4">
              <a href="#ana-sayfa" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
                Ana Sayfa
              </a>
              <a href="#urunler" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
                Ürünler
              </a>
              <a href="#galeri" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
                Galeri
              </a>
              <a href="#hakkimizda" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
                Hakkımızda
              </a>
              <a href="#haberler" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
                Haberler
              </a>
              <a href="#iletisim" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-200">
                İletişim
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 text-center"
              >
                WhatsApp Sipariş
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;