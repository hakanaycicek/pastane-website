import React from 'react';
import { ArrowLeft, RotateCcw, AlertCircle, CheckCircle, XCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReturnPolicy: React.FC = () => {
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
              <RotateCcw className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">İptal ve İade Politikası</h1>
              <p className="text-gray-600">Son güncelleme: Ocak 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tat-o Pastahane olarak müşteri memnuniyeti önceliğimizdir. İptal ve iade süreçlerimiz hakkında detaylı bilgileri aşağıda bulabilirsiniz.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Sipariş İptali</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">İptal Edilebilir Durumlar</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Sipariş alındıktan sonra 30 dakika içinde</li>
                      <li>Ürün hazırlığı başlamadan önce</li>
                      <li>Standart ürünler için herhangi bir ücret kesilmez</li>
                      <li>Hazır ürünler için ücretsiz iptal</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <h3 className="font-semibold text-red-800">İptal Edilemeyen Durumlar</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Özel pasta siparişlerinde hazırlık başladıktan sonra</li>
                      <li>Kişiye özel yazılı pastalar</li>
                      <li>Özel gün pastalarında teslimat günü</li>
                      <li>Özel malzemeli ürünlerde malzeme hazırlığı sonrası</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <RotateCcw className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">İade Koşulları</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-amber-800 mb-3">💯 Tam İade Durumları</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Ürün Hatası:</strong> Yanlış ürün teslimatı</li>
                      <li><strong>Kalite Problemi:</strong> Bozuk, bayat veya hijyen problemi</li>
                      <li><strong>Hasar:</strong> Taşıma sırasında zarar görmüş ürünler</li>
                      <li><strong>Eksik Teslimat:</strong> Siparişin bir kısmının gelmemesi</li>
                      <li><strong>Geç Teslimat:</strong> Belirlenen saatten 2+ saat geç</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Kısmi İade Durumları</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Özel isteklerin yerine getirilmemesi (%50 iade)</li>
                      <li>Görsel farklılıklar (dekorasyon vb.) (%25 iade)</li>
                      <li>Lezzet memnuniyetsizliği (değerlendirmeye göre)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3">❌ İade Edilemeyen Durumlar</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Teslim alındıktan 2 saat sonra bildirilen problemler</li>
                      <li>Kişisel beğeni farklılıkları</li>
                      <li>Yanlış adres nedeniyle gecikmeler</li>
                      <li>Müşteri hazır bulunmadığı için yapılan ikinci teslimat</li>
                      <li>Tüketilen ürünler</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">İade Süreci</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-3">1️⃣ İade Başvurusu</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Teslimat sonrası 2 saat içinde</li>
                        <li>WhatsApp veya telefon ile bildirim</li>
                        <li>Ürün fotoğrafı gönderme</li>
                        <li>Problemin detaylı açıklaması</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-3">2️⃣ Değerlendirme</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Başvuru incelenmesi (30 dk)</li>
                        <li>Gerekirse yetkili ziyareti</li>
                        <li>İade oranının belirlenmesi</li>
                        <li>Müşteriye onay bildirilmesi</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-amber-800 mb-3">3️⃣ İade İşlemi</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>Nakit ödeme: Anında iade</li>
                        <li>Kart ödeme: 3-5 iş günü</li>
                        <li>Ürün değişimi (varsa)</li>
                        <li>İade makbuzu düzenleme</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-3">4️⃣ Takip</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        <li>İade işlem durumu bilgisi</li>
                        <li>Memnuniyet kontrolü</li>
                        <li>Gelecek siparişler için not</li>
                        <li>Müşteri deneyimi kaydı</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Özel Ürün Koşulları</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-amber-800 mb-3">🎂 Özel Pastalar</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>İptal: Hazırlık başlamadan önce ücretsiz</li>
                      <li>Değişiklik: 24 saat önceden mümkün</li>
                      <li>İade: Sadece kalite problemlerinde</li>
                      <li>Görsel fark: Majör hatalar haricinde iade yok</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">🥮 Bayram ve Özel Gün Ürünleri</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>İptal: 48 saat önceden mümkün</li>
                      <li>Yoğun dönemlerde ekstra süre gerekli</li>
                      <li>Son dakika değişiklikleri mümkün olmayabilir</li>
                      <li>İade koşulları standart politika ile aynı</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-semibold text-gray-900">İletişim ve Başvuru</h2>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    İptal ve iade işlemleri için aşağıdaki kanallardan bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">💬</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp (Öncelikli)</p>
                          <p className="text-gray-600">(0555) 123 45 67</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-8 h-8 text-amber-600" />
                        <div>
                          <p className="font-semibold text-gray-800">Telefon</p>
                          <p className="text-gray-600">(0232) 123 45 67</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800">Çalışma Saatleri</p>
                        <p className="text-gray-600">Pazartesi-Cumartesi: 09:00-22:00</p>
                        <p className="text-gray-600">Pazar: 10:00-21:00</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold text-gray-800">Acil Durumlar</p>
                        <p className="text-gray-600">WhatsApp 7/24 aktif</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Müşteri Memnuniyet Garantisi</h2>
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg">
                  <p className="text-gray-700 text-center text-lg font-medium">
                    "Memnuniyetiniz bizim önceliğimizdir. Her sorunun adil bir çözümü vardır ve 
                    size en iyi hizmeti sunmak için elimizden geleni yaparız."
                  </p>
                  <p className="text-center text-amber-700 mt-3 font-semibold">
                    — Tat-o Pastahane Yönetimi
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy; 