import React, { createContext, useContext, useState } from 'react';
import { products as initialProducts, categories as initialCategories } from '../data/products';

interface Product {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  category: string;
  unit?: string;
  description?: string;
  isSpecial?: boolean;
}

interface Campaign {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  isActive: boolean;
  bgColor?: string;
  textColor?: string;
}

interface ProductsContextType {
  products: Product[];
  categories: string[];
  campaigns: Campaign[];
  gallery: string[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: number | string, product: Partial<Product>) => void;
  deleteProduct: (id: number | string) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

// Mock campaigns data
const mockCampaigns: Campaign[] = [
  {
    id: 'special-offer-1',
    type: 'special-offer',
    title: 'Özel İndirim',
    subtitle: '2 pasta alana 1 pasta bedava!',
    isActive: true,
    bgColor: 'bg-gradient-to-r from-amber-600 to-orange-600',
    textColor: 'text-white'
  }
];

// Mock gallery data
const mockGallery: string[] = [
  'https://images.pexels.com/photos/1721643/pexels-photo-1721643.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1721677/pexels-photo-1721677.jpeg?auto=compress&cs=tinysrgb&w=400'
];

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const updateProduct = (id: number | string, updatedProduct: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const deleteProduct = (id: number | string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const value = {
    products,
    categories: initialCategories,
    campaigns: mockCampaigns,
    gallery: mockGallery,
    setProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};