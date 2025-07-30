import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `
Merhaba! İletişim formundan mesaj:

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Konu: ${formData.subject}
Mesaj: ${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            İletişim
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Sorularınız, siparişleriniz ve özel istekleriniz için bizimle iletişime geçin. 
            Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-8">İletişim Bilgileri</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Adres</h4>
                  <p className="text-gray-700">
                    Alsancak Mahallesi, Cumhuriyet Bulvarı No:123<br />
                    Konak / İzmir, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Telefon</h4>
                  <p className="text-gray-700">
                    <a href="tel:+902321234567" className="hover:text-amber-600 transition-colors duration-200">
                      (0232) 123 45 67
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="tel:+905551234567" className="hover:text-amber-600 transition-colors duration-200">
                      (0555) 123 45 67
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">E-posta</h4>
                  <p className="text-gray-700">
                    <a href="mailto:info@tatopastahane.com" className="hover:text-amber-600 transition-colors duration-200">
                      info@tatopastahane.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a href="mailto:siparis@tatopastahane.com" className="hover:text-amber-600 transition-colors duration-200">
                      siparis@tatopastahane.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Çalışma Saatleri</h4>
                  <div className="text-gray-700 space-y-1">
                    <p>Pazartesi - Cumartesi: 09:00 - 22:00</p>
                    <p>Pazar: 10:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-amber-900 mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
                >
                  <span className="text-lg">📘</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                >
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="bg-amber-100 rounded-2xl p-8 text-center">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h4 className="font-semibold text-amber-900 mb-2">Harita</h4>
                <p className="text-amber-700 mb-4">
                  Mağazamızın konumunu Google Maps'te görüntüleyin
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Haritada Görüntüle
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-8">Mesaj Gönder</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="E-posta adresiniz"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Telefon numaranız"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Konu seçin</option>
                    <option value="siparis">Sipariş</option>
                    <option value="ozel-tasarim">Özel Tasarım</option>
                    <option value="fiyat-bilgisi">Fiyat Bilgisi</option>
                    <option value="sikayet">Şikayet</option>
                    <option value="oneri">Öneri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Mesaj Gönder</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl">
              <p className="text-sm text-amber-700 text-center">
                <strong>Not:</strong> Form gönderildiğinde WhatsApp üzerinden mesajınız iletilecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;