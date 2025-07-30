import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tat-o Pastahane</h3>
                <p className="text-amber-300 text-sm">Geleneksel Lezzetler</p>
              </div>
            </div>
            <p className="text-amber-200 mb-6 leading-relaxed">
              1985'ten beri İzmir'in en taze pastalarını, baklavalarını ve geleneksel 
              tatlılarını özenle hazırlıyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <span className="text-sm">💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li>
                <a href="#ana-sayfa" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Ürünlerimiz
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#hakkimizda" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#haberler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Haberler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="text-amber-200 hover:text-white transition-colors duration-200">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ürün Kategorileri</h4>
            <ul className="space-y-3">
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Pastalar
                </a>
              </li>
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Baklavalar
                </a>
              </li>
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Sarma Grubu
                </a>
              </li>
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Tepsi Tatlıları
                </a>
              </li>
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  Sütlü Tatlılar
                </a>
              </li>
              <li>
                <a href="#urunler" className="text-amber-200 hover:text-white transition-colors duration-200">
                  İçecekler
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-amber-200 text-sm">
                    Alsancak Mah. Cumhuriyet Bulvarı<br />
                    No:123 Konak / İzmir
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+902321234567" className="text-amber-200 hover:text-white transition-colors duration-200">
                  (0232) 123 45 67
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:info@tatopastahane.com" className="text-amber-200 hover:text-white transition-colors duration-200">
                  info@tatopastahane.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div className="text-amber-200 text-sm">
                  <p>Pazartesi-Cumartesi: 09:00-22:00</p>
                  <p>Pazar: 10:00-21:00</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                <span className="mr-2">💬</span>
                WhatsApp Sipariş
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-amber-200 text-sm">
              <span>&copy; 2025 Tat-o Pastahane. Tüm hakları saklıdır.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-amber-200 text-sm mt-4 md:mt-0">
              <span>İzmir'den sevgilerle yapıldı</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6 mt-4 text-xs text-amber-300">
            <a href="#" className="hover:text-white transition-colors duration-200">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Çerez Politikası</a>
            <a href="#" className="hover:text-white transition-colors duration-200">İptal & İade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;