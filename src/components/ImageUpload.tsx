import React, { useRef, useState } from 'react';
import { Upload, X, Image } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (imageData: string) => void;
  placeholder?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  value, 
  onChange, 
  placeholder = "Resim yükleyin", 
  className = "" 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Dosya türü kontrolü
    if (!file.type.startsWith('image/')) {
      alert('Lütfen sadece resim dosyası seçin.');
      return;
    }

    // Dosya boyutu kontrolü (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Resim boyutu 5MB\'dan küçük olmalıdır.');
      return;
    }

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onChange(result);
      setIsLoading(false);
    };
    reader.onerror = () => {
      alert('Resim yüklenirken hata oluştu.');
      setIsLoading(false);
    };
    
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div
        onClick={handleClick}
        className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors cursor-pointer group"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {isLoading ? (
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
            <p className="text-sm text-gray-500">Yükleniyor...</p>
          </div>
        ) : value ? (
          <div className="relative">
            <img
              src={value}
              alt="Yüklenen resim"
              className="max-w-full max-h-48 mx-auto rounded-lg object-cover"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-colors"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity rounded-lg flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-90 rounded-full p-2">
                <Upload className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Image className="w-12 h-12 text-gray-400 group-hover:text-amber-500 transition-colors" />
            <div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                {placeholder}
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF (max 5MB)</p>
            </div>
          </div>
        )}
      </div>

      {value && value.startsWith('data:') && (
        <p className="text-xs text-green-600 text-center">
          ✓ Resim başarıyla yüklendi
        </p>
      )}
    </div>
  );
};

export default ImageUpload; 