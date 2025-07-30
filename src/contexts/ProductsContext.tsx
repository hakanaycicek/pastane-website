import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, categories as initialCategories } from '../data/products';
import { dbService, Product as DBProduct, Category as DBCategory, Campaign as DBCampaign, GalleryItem as DBGalleryItem } from '../database/db';

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
  categoriesWithIds: DBCategory[];
  campaigns: Campaign[];
  gallery: string[];
  galleryWithIds: DBGalleryItem[];
  isLoading: boolean;
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: number | string, product: Partial<Product>) => void;
  deleteProduct: (id: number | string) => void;
  // Database methods
  addCategory: (name: string, displayOrder?: number) => void;
  updateCategory: (id: number, updates: { name?: string; display_order?: number }) => void;
  deleteCategory: (id: number) => void;
  addGalleryItem: (item: { image_url: string; alt_text?: string; category?: string; display_order?: number }) => void;
  updateGalleryItem: (id: number, updates: { image_url?: string; alt_text?: string; category?: string; display_order?: number }) => void;
  deleteGalleryItem: (id: number) => void;
  addCampaign: (campaign: { id?: string; type: string; title: string; subtitle?: string; description?: string; bg_color?: string; text_color?: string; is_active?: boolean }) => void;
  updateCampaign: (id: string, updates: Partial<DBCampaign>) => void;
  deleteCampaign: (id: string) => void;
  refreshData: () => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategoriesState] = useState<string[]>(initialCategories);
  const [categoriesWithIds, setCategoriesWithIds] = useState<DBCategory[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [gallery, setGallery] = useState<string[]>([]);
  const [galleryWithIds, setGalleryWithIds] = useState<DBGalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Database'i initialize et ve verileri yükle
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        setIsLoading(true);
        console.log('Initializing database...');
        await dbService.init();
        console.log('Database initialized successfully');
        await loadDataFromDatabase();
        console.log('Data loaded from database');
      } catch (error) {
        console.error('Database initialization failed:', error);
        alert('Veritabanı başlatılamadı: ' + error.message);
        // Fallback to static data
        setProducts(initialProducts);
        setCategoriesState(initialCategories);
        setCampaigns([
          {
            id: 'special-offer-1',
            type: 'special-offer',
            title: 'Özel İndirim',
            subtitle: '2 pasta alana 1 pasta bedava!',
            isActive: true,
            bgColor: 'bg-gradient-to-r from-amber-600 to-orange-600',
            textColor: 'text-white'
          }
        ]);
        setGallery([
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
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    initializeDatabase();
  }, []);

  const loadDataFromDatabase = async () => {
    try {
      // Products yükle
      const dbProducts = dbService.getAllProducts();
      if (dbProducts.length === 0) {
        // İlk kez çalışıyorsa, varsayılan ürünleri ekle
        for (const product of initialProducts) {
          dbService.createProduct({
            id: product.id as string,
            name: product.name,
            price: product.price as string,
            unit: product.unit || 'adet',
            category: product.category,
            image: product.image,
            description: product.description,
            is_special: product.isSpecial || false,
          });
        }
        setProducts(initialProducts);
      } else {
        const formattedProducts = dbProducts.map(p => ({
          id: p.id,
          name: p.name,
          price: p.price,
          unit: p.unit,
          category: p.category,
          image: p.image,
          description: p.description,
          isSpecial: p.is_special,
        }));
        setProducts(formattedProducts);
      }

      // Categories yükle
      const dbCategories = dbService.getAllCategories();
      if (dbCategories.length > 0) {
        setCategoriesState(dbCategories.map(c => c.name));
        setCategoriesWithIds(dbCategories);
      }

      // Campaigns yükle
      const dbCampaigns = dbService.getAllCampaigns();
      const formattedCampaigns = dbCampaigns.map(c => ({
        id: c.id,
        type: c.type,
        title: c.title,
        subtitle: c.subtitle,
        isActive: c.is_active,
        bgColor: c.bg_color,
        textColor: c.text_color,
      }));
      setCampaigns(formattedCampaigns);

      // Gallery yükle
      const dbGallery = dbService.getAllGalleryItems();
      if (dbGallery.length === 0) {
        // İlk kez çalışıyorsa, varsayılan galeri resimleri ekle
        const defaultGallery = [
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
        
        defaultGallery.forEach((url, index) => {
          dbService.createGalleryItem({
            image_url: url,
            alt_text: `Galeri ${index + 1}`,
            category: 'Galeri',
            display_order: index,
            is_active: true,
          });
        });
        setGallery(defaultGallery);
        setGalleryWithIds([]);
      } else {
        setGallery(dbGallery.map(g => g.image_url));
        setGalleryWithIds(dbGallery);
      }
    } catch (error) {
      console.error('Failed to load data from database:', error);
    }
  };

  const refreshData = () => {
    loadDataFromDatabase();
  };

  const addProduct = (product: Product) => {
    try {
      console.log('Adding product:', product);
      dbService.createProduct({
        id: product.id as string,
        name: product.name,
        price: product.price as string,
        unit: product.unit || 'adet',
        category: product.category,
        image: product.image,
        description: product.description,
        is_special: product.isSpecial || false,
      });
      setProducts(prev => {
        const updated = [...prev, product];
        console.log('Products updated:', updated);
        return updated;
      });
      console.log('Product added successfully');
    } catch (error) {
      console.error('Failed to add product:', error);
      alert('Ürün eklenirken hata oluştu: ' + error);
    }
  };

  const updateProduct = (id: number | string, updatedProduct: Partial<Product>) => {
    try {
      const updates: any = {};
      if (updatedProduct.name) updates.name = updatedProduct.name;
      if (updatedProduct.price) updates.price = updatedProduct.price as string;
      if (updatedProduct.unit) updates.unit = updatedProduct.unit;
      if (updatedProduct.category) updates.category = updatedProduct.category;
      if (updatedProduct.image) updates.image = updatedProduct.image;
      if (updatedProduct.description !== undefined) updates.description = updatedProduct.description;
      if (updatedProduct.isSpecial !== undefined) updates.is_special = updatedProduct.isSpecial;

      dbService.updateProduct(id as string, updates);
      setProducts(prev => 
        prev.map(product => 
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      );
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  const deleteProduct = (id: number | string) => {
    try {
      dbService.deleteProduct(id as string);
      setProducts(prev => prev.filter(product => product.id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  // Category methods
  const addCategory = (name: string, displayOrder = 0) => {
    try {
      console.log('Adding category:', name, displayOrder);
      dbService.createCategory(name, displayOrder);
      const updatedCategories = dbService.getAllCategories();
      setCategoriesState(updatedCategories.map(c => c.name));
      setCategoriesWithIds(updatedCategories);
      console.log('Category added successfully, updated categories:', updatedCategories);
    } catch (error) {
      console.error('Failed to add category:', error);
      alert('Kategori eklenirken hata oluştu: ' + error);
    }
  };

  const updateCategory = (id: number, updates: { name?: string; display_order?: number }) => {
    try {
      console.log('Updating category:', id, updates);
      
      // Eğer isim değişikliği varsa, önce eski kategori ismini al
      let oldCategoryName = '';
      if (updates.name) {
        const categoryToUpdate = categoriesWithIds.find(cat => cat.id === id);
        if (categoryToUpdate) {
          oldCategoryName = categoryToUpdate.name;
          console.log('Old category name:', oldCategoryName, 'New category name:', updates.name);
        }
      }
      
      // Kategoriyi güncelle
      dbService.updateCategory(id, updates);
      
      // Eğer kategori ismi değiştiyse, o kategoriye ait tüm ürünleri güncelle
      if (updates.name && oldCategoryName && oldCategoryName !== updates.name) {
        console.log('Updating products from category:', oldCategoryName, 'to:', updates.name);
        
        // Database'deki tüm ürünleri al ve güncelle
        const allProducts = dbService.getAllProducts();
        const productsToUpdate = allProducts.filter(p => p.category === oldCategoryName);
        
        console.log('Found products to update:', productsToUpdate.length);
        
        // Her ürünün kategorisini güncelle
        productsToUpdate.forEach(product => {
          dbService.updateProduct(product.id, { category: updates.name });
          console.log('Updated product:', product.name, 'from', oldCategoryName, 'to', updates.name);
        });
        
        // State'deki ürünleri de güncelle
        setProducts(prev => 
          prev.map(product => 
            product.category === oldCategoryName 
              ? { ...product, category: updates.name } 
              : product
          )
        );
        
        alert(`${productsToUpdate.length} ürünün kategorisi "${oldCategoryName}"den "${updates.name}"e güncellendi!`);
      }
      
      // Kategorileri güncelle
      const updatedCategories = dbService.getAllCategories();
      setCategoriesState(updatedCategories.map(c => c.name));
      setCategoriesWithIds(updatedCategories);
      console.log('Category updated successfully');
      
    } catch (error) {
      console.error('Failed to update category:', error);
      alert('Kategori güncellenirken hata oluştu: ' + error);
    }
  };

  const deleteCategory = (id: number) => {
    try {
      console.log('Deleting category:', id);
      
      // Önce silinecek kategoriyi bul
      const categoryToDelete = categoriesWithIds.find(cat => cat.id === id);
      if (!categoryToDelete) {
        alert('Silinecek kategori bulunamadı!');
        return;
      }
      
      // Bu kategoriye ait ürün var mı kontrol et
      const productsInCategory = products.filter(p => p.category === categoryToDelete.name);
      
      if (productsInCategory.length > 0) {
        const confirmDelete = confirm(
          `"${categoryToDelete.name}" kategorisinde ${productsInCategory.length} ürün bulunuyor. ` +
          `Bu kategoriyi silersek, bu ürünler "Tümü" kategorisine taşınacak. Devam etmek istiyor musunuz?`
        );
        
        if (!confirmDelete) {
          console.log('Category deletion cancelled by user');
          return;
        }
        
        // Ürünleri "Tümü" kategorisine taşı
        console.log(`Moving ${productsInCategory.length} products to "Tümü" category`);
        productsInCategory.forEach(product => {
          dbService.updateProduct(product.id as string, { category: 'Tümü' });
          console.log('Moved product:', product.name, 'to Tümü category');
        });
        
        // State'deki ürünleri de güncelle
        setProducts(prev => 
          prev.map(product => 
            product.category === categoryToDelete.name 
              ? { ...product, category: 'Tümü' } 
              : product
          )
        );
        
        alert(`${productsInCategory.length} ürün "Tümü" kategorisine taşındı.`);
      }
      
      // Kategoriyi sil
      dbService.deleteCategory(id);
      const updatedCategories = dbService.getAllCategories();
      setCategoriesState(updatedCategories.map(c => c.name));
      setCategoriesWithIds(updatedCategories);
      console.log('Category deleted successfully');
      
    } catch (error) {
      console.error('Failed to delete category:', error);
      alert('Kategori silinirken hata oluştu: ' + error);
    }
  };

  // Gallery methods
  const addGalleryItem = (item: { image_url: string; alt_text?: string; category?: string; display_order?: number }) => {
    try {
      console.log('Adding gallery item:', item);
      dbService.createGalleryItem({
        image_url: item.image_url,
        alt_text: item.alt_text,
        category: item.category || 'Galeri',
        display_order: item.display_order || 0,
        is_active: true,
      });
      const updatedGallery = dbService.getAllGalleryItems();
      setGallery(updatedGallery.map(g => g.image_url));
      setGalleryWithIds(updatedGallery);
      console.log('Gallery item added successfully, updated gallery:', updatedGallery);
    } catch (error) {
      console.error('Failed to add gallery item:', error);
      alert('Galeri öğesi eklenirken hata oluştu: ' + error);
    }
  };

  const updateGalleryItem = (id: number, updates: { image_url?: string; alt_text?: string; category?: string; display_order?: number }) => {
    try {
      console.log('Updating gallery item:', id, updates);
      dbService.updateGalleryItem(id, updates);
      const updatedGallery = dbService.getAllGalleryItems();
      setGallery(updatedGallery.map(g => g.image_url));
      setGalleryWithIds(updatedGallery);
      console.log('Gallery item updated successfully');
    } catch (error) {
      console.error('Failed to update gallery item:', error);
      alert('Galeri öğesi güncellenirken hata oluştu: ' + error);
    }
  };

  const deleteGalleryItem = (id: number) => {
    try {
      console.log('Deleting gallery item:', id);
      dbService.deleteGalleryItem(id);
      const updatedGallery = dbService.getAllGalleryItems();
      setGallery(updatedGallery.map(g => g.image_url));
      setGalleryWithIds(updatedGallery);
      console.log('Gallery item deleted successfully');
    } catch (error) {
      console.error('Failed to delete gallery item:', error);
      alert('Galeri öğesi silinirken hata oluştu: ' + error);
    }
  };

  // Campaign methods
  const addCampaign = (campaign: { id?: string; type: string; title: string; subtitle?: string; description?: string; bg_color?: string; text_color?: string; is_active?: boolean }) => {
    try {
      const newCampaign = {
        ...campaign,
        id: campaign.id || `campaign-${Date.now()}`,
        bg_color: campaign.bg_color || 'bg-gradient-to-r from-amber-600 to-orange-600',
        text_color: campaign.text_color || 'text-white',
        is_active: campaign.is_active ?? true,
      };
      
      dbService.createCampaign(newCampaign);
      setCampaigns(prev => [...prev, {
        id: newCampaign.id,
        type: newCampaign.type,
        title: newCampaign.title,
        subtitle: newCampaign.subtitle,
        isActive: newCampaign.is_active,
        bgColor: newCampaign.bg_color,
        textColor: newCampaign.text_color,
      }]);
    } catch (error) {
      console.error('Failed to add campaign:', error);
    }
  };

  const updateCampaign = (id: string, updates: Partial<DBCampaign>) => {
    try {
      dbService.updateCampaign(id, updates);
      refreshData();
    } catch (error) {
      console.error('Failed to update campaign:', error);
    }
  };

  const deleteCampaign = (id: string) => {
    try {
      dbService.deleteCampaign(id);
      setCampaigns(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error('Failed to delete campaign:', error);
    }
  };

  const value = {
    products,
    categories,
    categoriesWithIds,
    campaigns,
    gallery,
    galleryWithIds,
    isLoading,
    setProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
    updateCategory,
    deleteCategory,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    addCampaign,
    updateCampaign,
    deleteCampaign,
    refreshData,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};