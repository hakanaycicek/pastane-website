import React from 'react';
import { ArrowLeft, Cookie, Settings, Info, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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
              <Cookie className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Çerez Politikası</h1>
              <p className="text-gray-600">Son güncelleme: Ocak 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tat-o Pastahane web sitesinde çerezleri nasıl kullandığımızı ve çerez tercihlerinizi nasıl yönetebileceğinizi bu sayfada açıklıyoruz.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Çerez Nedir?</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Çerezler, web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. 
                    Bu dosyalar web sitesinin daha iyi çalışmasını ve size daha iyi bir deneyim sunmasını sağlar.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Kullandığımız Çerez Türleri</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">🔧 Zorunlu Çerezler</h3>
                    <p className="text-gray-700 mb-3">
                      Web sitesinin temel işlevlerinin çalışması için gerekli çerezlerdir. Bu çerezler devre dışı bırakılamaz.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Oturum yönetimi</li>
                      <li>Güvenlik önlemleri</li>
                      <li>Form verilerinin korunması</li>
                      <li>Dil ve bölge tercihleri</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">📊 Performans Çerezleri</h3>
                    <p className="text-gray-700 mb-3">
                      Web sitesinin performansını ölçmek ve iyileştirmek için kullanılır.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Sayfa yükleme süreleri</li>
                      <li>Kullanıcı etkileşimleri</li>
                      <li>Hata kayıtları</li>
                      <li>Trafik analizi</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">🎯 İşlevsellik Çerezleri</h3>
                    <p className="text-gray-700 mb-3">
                      Size kişiselleştirilmiş bir deneyim sunmak için kullanılır.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Tercih edilen ürünler</li>
                      <li>Sepet içeriği</li>
                      <li>Görüntüleme seçenekleri</li>
                      <li>Bölge ve dil ayarları</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Çerezlerin Kullanım Amaçları</h2>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li><strong>Web Sitesi İşlevselliği:</strong> Sitenin düzgün çalışmasını sağlama</li>
                    <li><strong>Kullanıcı Deneyimi:</strong> Tercihlerinizi hatırlayarak daha iyi hizmet sunma</li>
                    <li><strong>Güvenlik:</strong> Güvenli alışveriş ve veri koruması</li>
                    <li><strong>Performans İyileştirme:</strong> Site hızını ve performansını artırma</li>
                    <li><strong>İstatistik Toplama:</strong> Site kullanımını analiz etme</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Çerez Yönetimi</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Çerez tercihlerinizi aşağıdaki yollarla yönetebilirsiniz:</p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Tarayıcı Ayarları</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
                      <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
                      <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezleri yönet</li>
                      <li><strong>Edge:</strong> Ayarlar → Site izinleri → Çerezler</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Trash2 className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Çerezleri Silme</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Mevcut çerezleri tarayıcınızın ayarlar bölümünden silebilirsiniz. Ancak bu işlem sonrasında:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Bazı site özellikleri düzgün çalışmayabilir</li>
                    <li>Tercihleriniz sıfırlanabilir</li>
                    <li>Oturum bilgileriniz silinebilir</li>
                    <li>Site performansı etkilenebilir</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Üçüncü Taraf Çerezleri</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Web sitemizde aşağıdaki üçüncü taraf hizmetlerin çerezleri kullanılabilir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> Site kullanım istatistikleri</li>
                    <li><strong>WhatsApp:</strong> Müşteri iletişimi</li>
                    <li><strong>Sosyal Medya:</strong> Facebook, Instagram entegrasyonu</li>
                  </ul>
                  <p className="mt-4">
                    Bu çerezler için ilgili platformların gizlilik politikalarını incelemenizi öneririz.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Çerez Politikası Güncellemeleri</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bu çerez politikasını zaman zaman güncelleyebiliriz. Güncellemeler web sitemizde yayınlandığı anda yürürlüğe girer. 
                    Düzenli olarak bu sayfayı ziyaret etmenizi öneririz.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h2>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Çerez politikamız hakkında sorularınız için:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>E-posta:</strong> info@tatopastahane.com</p>
                    <p><strong>Telefon:</strong> (0232) 123 45 67</p>
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

export default CookiePolicy; 