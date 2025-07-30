import React from 'react';
import { ArrowLeft, FileText, ShoppingCart, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kullanım Şartları</h1>
              <p className="text-gray-600">Son güncelleme: Ocak 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tat-o Pastahane hizmetlerinden faydalanarak aşağıdaki şart ve koşulları kabul etmiş sayılırsınız. Lütfen bu koşulları dikkatlice okuyunuz.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Sipariş Koşulları</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>Sipariş Alma:</strong> Siparişler WhatsApp, telefon veya web sitesi üzerinden alınır</li>
                    <li><strong>Sipariş Onayı:</strong> Tüm siparişler telefon ile teyit edilir</li>
                    <li><strong>Fiyat Değişiklikleri:</strong> Fiyatlar önceden haber verilmeden değiştirilebilir</li>
                    <li><strong>Stok Durumu:</strong> Ürünler stok durumuna göre temin edilir</li>
                    <li><strong>Özel Siparişler:</strong> Pasta ve özel ürünler en az 24 saat önceden sipariş edilmelidir</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Teslimat Koşulları</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>Teslimat Saatleri:</strong> Pazartesi-Cumartesi 09:00-21:00, Pazar 10:00-20:00</li>
                    <li><strong>Teslimat Bölgesi:</strong> İzmir merkez ilçeleri</li>
                    <li><strong>Teslimat Ücreti:</strong> Minimum sipariş tutarının altındaki siparişlerde teslimat ücreti alınır</li>
                    <li><strong>Teslimat Süresi:</strong> Standart ürünler 1-2 saat, özel ürünler belirlenen zamanda</li>
                    <li><strong>Gecikme:</strong> Hava koşulları ve trafik durumu teslimat süresini etkileyebilir</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Ödeme Koşulları</h2>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>Ödeme Yöntemleri:</strong> Nakit, kredi kartı, banka kartı kabul edilir</li>
                    <li><strong>Kapıda Ödeme:</strong> Tüm ödeme yöntemleri teslimat sırasında kullanılabilir</li>
                    <li><strong>Fatura:</strong> Talep edilmesi durumunda fatura düzenlenir</li>
                    <li><strong>İade Koşulları:</strong> Ürün hatası durumunda tam iade yapılır</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Ürün Kalitesi ve Sorumluluk</h2>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>Tazelik Garantisi:</strong> Ürünlerimiz günlük taze olarak üretilir</li>
                    <li><strong>Hijyen Standartları:</strong> Gıda güvenliği kurallarına tam uyum sağlanır</li>
                    <li><strong>Alerjen Uyarısı:</strong> Ürünlerimizde bulunan alerjenler hakkında bilgi verilir</li>
                    <li><strong>Muhafaza Koşulları:</strong> Teslimat sonrası ürün muhafazası müşteri sorumluluğundadır</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">İptal ve İade Koşulları</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>Sipariş İptali:</strong> Üretim başlamadan önce siparişler iptal edilebilir</li>
                    <li><strong>Özel Ürün İptali:</strong> Üretimi başlayan özel ürünler iptal edilemez</li>
                    <li><strong>Ürün İadesi:</strong> Bozuk veya hatalı ürünler tam olarak iade edilir</li>
                    <li><strong>İade Süresi:</strong> İade talepleri teslimat sonrası 2 saat içinde bildirilmelidir</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Müşteri Sorumlulukları</h2>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Doğru ve güncel iletişim bilgileri verme</li>
                    <li>Teslimat adresinin açık ve erişilebilir olması</li>
                    <li>Teslimat saatinde hazır bulunma</li>
                    <li>Ürün teslim alırken kontrol etme</li>
                    <li>Sorun durumunda derhal bildirim yapma</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Değişiklik Hakkı</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Tat-o Pastahane, bu kullanım şartlarını önceden bildirimde bulunarak değiştirme hakkını saklı tutar. 
                    Güncel şartlar web sitemizde yayınlanır ve yürürlüğe girer.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h2>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Kullanım şartları hakkında sorularınız için:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>E-posta:</strong> info@tatopastahane.com</p>
                    <p><strong>Telefon:</strong> (0232) 123 45 67</p>
                    <p><strong>WhatsApp:</strong> (0555) 123 45 67</p>
                    <p><strong>Adres:</strong> Alsancak Mah. Cumhuriyet Bulvarı No:123 Konak / İzmir</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 