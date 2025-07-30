import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  unit?: string;
  image: string;
  category: string;
  description?: string;
  isSpecial?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  unit = 'adet',
  image,
  category,
  description,
  isSpecial = false
}) => {
  const handleWhatsAppOrder = () => {
    const message = `Merhaba! ${name} için sipariş vermek istiyorum. Fiyat: ${price}₺/${unit}`;
    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Special Badge */}
      {isSpecial && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          ⭐ Özel
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
          {name}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-amber-600">
              {price}₺
            </span>
            <span className="text-gray-500 text-sm ml-1">
              /{unit}
            </span>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Sipariş</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;