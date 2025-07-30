import React from 'react';
import { ArrowLeft, Shield, User, Database, Eye, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gizlilik Politikası</h1>
              <p className="text-gray-600">Son güncelleme: Ocak 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tat-o Pastahane olarak, kişisel bilgilerinizin gizliliğini korumayı ve size şeffaf bir deneyim sunmayı taahhüt ediyoruz. Bu politika, bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Toplanan Bilgiler</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Hizmetlerimizden faydalanırken aşağıdaki bilgileri toplayabiliriz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>İletişim Bilgileri:</strong> Ad, soyad, telefon numarası, e-posta adresi</li>
                    <li><strong>Adres Bilgileri:</strong> Teslimat için gerekli adres bilgileri</li>
                    <li><strong>Sipariş Bilgileri:</strong> Sipariş geçmişi, tercihler, özel istekler</li>
                    <li><strong>İletişim Kayıtları:</strong> WhatsApp, telefon veya e-posta iletişim kayıtları</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Bilgilerin Kullanımı</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sipariş alımı ve teslimat işlemlerinin gerçekleştirilmesi</li>
                    <li>Müşteri hizmetleri desteği sağlanması</li>
                    <li>Ürün ve hizmetlerimiz hakkında bilgilendirme</li>
                    <li>Özel kampanya ve promosyonlardan haberdar etme</li>
                    <li>Hizmet kalitesinin iyileştirilmesi</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Bilgi Paylaşımı</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kişisel bilgilerinizi üçüncü taraflarla paylaşmayız. Sadece aşağıdaki durumlarda sınırlı paylaşım yapabiliriz:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Teslimat için kargo firmalarıyla (sadece gerekli adres bilgileri)</li>
                    <li>Yasal zorunluluklar çerçevesinde resmi kurumlarla</li>
                    <li>Açık rızanızın bulunduğu durumlar</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Veri Güvenliği</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Kişisel bilgilerinizin güvenliği bizim için önceliklidir. Bu doğrultuda:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modern şifreleme yöntemleri kullanıyoruz</li>
                    <li>Erişim kontrolü ve güvenlik önlemleri uyguluyoruz</li>
                    <li>Personelimize düzenli gizlilik eğitimleri veriyoruz</li>
                    <li>Sistemlerimizi sürekli güncel tutuyoruz</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Haklarınız</h2>
                <div className="space-y-4 text-gray-700">
                  <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                    <li>Kişisel verilerin düzeltilmesini veya silinmesini isteme</li>
                    <li>İşleme izin verdiğiniz durumda rızanızı geri çekme</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h2>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

export default PrivacyPolicy; 