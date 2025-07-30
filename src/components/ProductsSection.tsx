import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProducts } from '../contexts/ProductsContext';

const ProductsSection: React.FC = () => {
  const { products, categories, campaigns } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="urunler" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Filter className="w-4 h-4 mr-2" />
            Ürün Kataloğu
          </div>
          <h2 className="text-4xl font-bold text-amber-900 mb-4">
            Lezzetli Ürünlerimiz
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Taze yapılmış pastalarımızdan geleneksel baklavalarımıza kadar, 
            her damak zevkine hitap eden geniş ürün yelpazemizi keşfedin.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-amber-600 border border-amber-200 hover:bg-amber-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              unit={product.unit}
              image={product.image}
              category={product.category}
              description={product.description}
              isSpecial={product.isSpecial}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              Ürün bulunamadı
            </h3>
            <p className="text-amber-700">
              Arama kriterlerinizi değiştirerek tekrar deneyin.
            </p>
          </div>
        )}

        {/* Special Offer Banner */}
        {(() => {
          const specialOfferCampaign = campaigns.find(c => c.type === 'special-offer' && c.isActive);
          if (!specialOfferCampaign) return null;
          
          return (
            <div className={`mt-20 ${specialOfferCampaign.bgColor || 'bg-gradient-to-r from-amber-600 to-orange-600'} rounded-3xl p-8 text-center ${specialOfferCampaign.textColor || 'text-white'} shadow-2xl`}>
              <h3 className="text-3xl font-bold mb-4">🎉 {specialOfferCampaign.title}</h3>
              {specialOfferCampaign.subtitle && (
                <p className="text-lg mb-6 opacity-90">
                  {specialOfferCampaign.subtitle}
                </p>
              )}
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-200 transform hover:scale-105"
              >
                Kampanyadan Faydalanın
              </a>
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default ProductsSection;