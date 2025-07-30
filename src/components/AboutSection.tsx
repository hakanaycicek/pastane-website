import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Hikayemiz
            </div>
            
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              40 Yıllık Lezzet Geleneği
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              1985 yılında İzmir'in kalbinde kurulan Tat-o Pastahane, dört nesil boyunca 
              geleneksel Türk tatlılarını modern dokunuşlarla harmanlayarak size sunuyor. 
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Babadan oğula geçen tariflerimiz, en kaliteli malzemeler ve deneyimli 
              ustalarımızın maharetli elleriyle sizlere ulaşıyor. Her bir ürünümüz, 
              aşkla ve özenle hazırlanıyor.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-amber-50 rounded-2xl">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-amber-900">15+</div>
                <p className="text-amber-700">Ödül</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-2xl">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-amber-900">50K+</div>
                <p className="text-amber-700">Mutlu Müşteri</p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Kaliteli Malzemeler</h4>
                  <p className="text-gray-600">Sadece en taze ve kaliteli malzemeler kullanıyoruz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Geleneksel Tarifler</h4>
                  <p className="text-gray-600">Nesiller boyu aktarılan özel tariflerimiz</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Günlük Taze Üretim</h4>
                  <p className="text-gray-600">Her gün taze olarak üretilen ürünler</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="/images/pasta görsel.png"
                alt="Pastahane İçi"
                className="w-full h-96 object-contain rounded-3xl shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50"
                onError={(e) => {
                  // Eğer lokal görsel yüklenemezse fallback olarak online görsel kullan
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800";
                }}
              />
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl -z-10"></div>
            
            {/* Experience Badge */}
            <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-900">40</div>
                <p className="text-sm text-amber-700">Yıl Tecrübe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-8">Uzman Ekibimiz</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👨‍🍳</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Usta Şeflermiz</h4>
              <p className="text-amber-700">
                20+ yıl tecrübeli usta şeflerimiz, her ürünü özenle hazırlıyor.
              </p>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🎂</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Pasta Uzmanları</h4>
              <p className="text-amber-700">
                Özel günleriniz için eşsiz pastalar tasarlayan uzman ekibimiz.
              </p>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🥮</span>
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Baklava Ustaları</h4>
              <p className="text-amber-700">
                Geleneksel baklava sanatını en ince detayına kadar bilen ustalarımız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;