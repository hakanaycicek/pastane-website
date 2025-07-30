import React, { useState } from 'react';
import { Image, ZoomIn, X } from 'lucide-react';
import { useProducts } from '../contexts/ProductsContext';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const GallerySection: React.FC = () => {
  const { gallery } = useProducts();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('Tümü');

  // Tüm galeri resimlerini context'ten al ve galeri formatına çevir
  const allGalleryImages: GalleryImage[] = gallery.map((image, index) => {
    // URL'ye göre kategori belirle (akıllı kategori tanıma)
    let category = 'Galeri';
    let alt = `Galeri resmi ${index + 1}`;
    
    if (image.includes('1721643')) {
      category = 'Pastalar';
      alt = 'Doğum Günü Pastası';
    } else if (image.includes('3026808')) {
      category = 'Baklavalar';
      alt = 'Fıstıklı Baklava';
    } else if (image.includes('1126359')) {
      category = 'Pastalar';
      alt = 'Çikolatalı Pasta';
    } else if (image.includes('140831')) {
      category = 'Pastalar';
      alt = 'Meyveli Pasta';
    } else if (image.includes('1126728')) {
      category = 'Sarma Grubu';
      alt = 'Sarma Tatlılar';
    } else if (image.includes('918327')) {
      category = 'Çikolatalar';
      alt = 'Dubai Çikolatası';
    } else if (image.includes('376464')) {
      category = 'Pastalar';
      alt = 'Özel Pasta';
    } else if (image.includes('2144112')) {
      category = 'Tepsi Tatlıları';
      alt = 'Tepsi Tatlısı';
    } else if (image.includes('291528')) {
      category = 'Pastalar';
      alt = 'Dilim Pasta';
    } else if (image.includes('1721677')) {
      category = 'Baklavalar';
      alt = 'Karışık Baklava';
    }
    
    return {
      id: `gallery-${index}`,
      src: image,
      alt: alt,
      category: category
    };
  });
  
  const categories = [...new Set(['Tümü', ...allGalleryImages.map(img => img.category)])];
  
  const filteredImages = activeCategory === 'Tümü' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Image className="w-4 h-4 mr-2" />
            Görsel Galeri
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Lezzetlerimizin Görselleri
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Pastalarımızdan baklavalarımıza kadar tüm ürünlerimizin özenle çekilmiş 
            fotoğraflarını galeri bölümümüzde inceleyebilirsiniz.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold mb-1">{image.alt}</h3>
                  <p className="text-amber-200 text-sm">{image.category}</p>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <Image className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Bu kategoride görsel bulunamadı
            </h3>
            <p className="text-amber-700">
              Farklı bir kategori seçerek tekrar deneyin.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Özel Siparişleriniz İçin
            </h3>
            <p className="text-amber-700 mb-8 max-w-2xl mx-auto">
              Düğün, doğum günü, nişan gibi özel günleriniz için size özel tasarım 
              pastalar ve tatlılar hazırlıyoruz. Hayalinizdeki tasarımı gerçekaştıralım!
            </p>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Özel Sipariş Ver
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.alt}</h3>
              <p className="text-amber-200">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;