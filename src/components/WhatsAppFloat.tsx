import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Merhaba! Tat-o Pastahane hakkında bilgi almak istiyorum.";
    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const hideFloat = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 w-64 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 animate-pulse">
          <div className="relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs transition-colors duration-200"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  Hemen Sipariş Verin!
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  WhatsApp üzerinden kolayca sipariş verebilir, sorularınızı sorabilirsiniz.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <MessageCircle className="w-8 h-8" />
        </button>
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white">
          <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
        </div>

        {/* Close button */}
        <button
          onClick={hideFloat}
          className="absolute -top-2 -left-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-200 opacity-0 hover:opacity-100"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Pulsing ring animation */}
      <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-green-400 animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppFloat;