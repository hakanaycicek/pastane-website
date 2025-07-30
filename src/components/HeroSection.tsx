import React from 'react';
import { Star, Award, Clock, Users } from 'lucide-react';
import { useProducts } from '../contexts/ProductsContext';

const HeroSection: React.FC = () => {
  const { campaigns } = useProducts();
  
  // Hero kampanyasını al
  const heroCampaign = campaigns.find(c => c.type === 'hero' && c.isActive);
  
  return (
    <section id="ana-sayfa" className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-opacity-5 bg-amber-900" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {heroCampaign && (
              <div className={`inline-flex items-center ${heroCampaign.bgColor || 'bg-amber-100'} ${heroCampaign.textColor || 'text-amber-800'} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                <Award className="w-4 h-4 mr-2" />
                {heroCampaign.title}
              </div>
            )}
            
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Geleneksel 
              <span className="text-amber-600"> Lezzetlerin</span>
              <br />Adresi
            </h1>
            
            <p className="text-lg text-amber-800 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tat-o Pastahane olarak, 40 yıldır İzmir'in en taze pastalarını, baklavalarını ve 
              geleneksel tatlılarını özenle hazırlıyoruz. Her ısırıkta kalite ve lezzet garantisi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#urunler"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Ürünlerimizi Keşfedin
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Hemen Sipariş Ver
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-amber-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-amber-500 mr-1" />
                  <span className="text-2xl font-bold text-amber-900">4.9</span>
                </div>
                <p className="text-sm text-amber-700">Müşteri Puanı</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-amber-500 mr-1" />
                  <span className="text-2xl font-bold text-amber-900">50K+</span>
                </div>
                <p className="text-sm text-amber-700">Mutlu Müşteri</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-amber-500 mr-1" />
                  <span className="text-2xl font-bold text-amber-900">40</span>
                </div>
                <p className="text-sm text-amber-700">Yıl Tecrübe</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="/images/hero-image.jpg"
                alt="Taze Pasta ve Tatlılar"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                onError={(e) => {
                  // Eğer lokal görsel yüklenemezse fallback olarak online görsel kullan
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/1721643/pexels-photo-1721643.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Taze Üretim</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-sm">Günlük</p>
                  <p className="text-lg font-bold">500+</p>
                  <p className="text-xs">Taze Ürün</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;