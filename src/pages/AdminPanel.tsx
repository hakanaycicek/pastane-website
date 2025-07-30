import React, { useState, useEffect } from 'react';
import { useProducts } from '../contexts/ProductsContext';
import ImageUpload from '../components/ImageUpload';
import { Package, Tags, Image, Megaphone, Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const AdminPanel: React.FC = () => {
  const { 
    products, 
    categories, 
    categoriesWithIds,
    campaigns, 
    gallery, 
    galleryWithIds,
    isLoading,
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
    refreshData
  } = useProducts();
  const [activeTab, setActiveTab] = useState('products');
  
  // Products state
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [productFormData, setProductFormData] = useState({
    id: '',
    name: '',
    price: '',
    unit: 'adet',
    image: '',
    category: '',
    description: '',
    is_special: false,
  });

  // Categories state
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [categoryFormData, setCategoryFormData] = useState({
    name: '',
    display_order: 0,
  });

  // Gallery state
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState<any>(null);
  const [galleryFormData, setGalleryFormData] = useState({
    image_url: '',
    alt_text: '',
    category: 'Galeri',
    display_order: 0,
  });

  // Campaigns state
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<any>(null);
  const [campaignFormData, setCampaignFormData] = useState({
    id: '',
    type: 'special-offer',
    title: '',
    subtitle: '',
    description: '',
    bg_color: 'bg-gradient-to-r from-amber-600 to-orange-600',
    text_color: 'text-white',
    is_active: true,
    start_date: '',
    end_date: '',
  });

  const tabs: TabProps[] = [
    { id: 'products', label: 'Ürünler', icon: <Package className="w-5 h-5" /> },
    { id: 'categories', label: 'Kategoriler', icon: <Tags className="w-5 h-5" /> },
    { id: 'gallery', label: 'Galeri', icon: <Image className="w-5 h-5" /> },
    { id: 'campaigns', label: 'Kampanyalar', icon: <Megaphone className="w-5 h-5" /> },
  ];

  // Product handlers
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      updateProduct(editingProduct.id, {
        ...productFormData,
        isSpecial: productFormData.is_special,
      });
      setEditingProduct(null);
    } else {
      const newProduct = {
        ...productFormData,
        id: productFormData.id || `product-${Date.now()}`,
        isSpecial: productFormData.is_special,
      };
      addProduct(newProduct);
    }
    
    resetProductForm();
  };

  const handleProductEdit = (product: any) => {
    setEditingProduct(product);
    setProductFormData({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      category: product.category,
      description: product.description || '',
      is_special: product.is_special || false,
    });
    setShowProductForm(true);
  };

  const handleProductDelete = (id: string) => {
    if (window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      deleteProduct(id);
    }
  };

  const resetProductForm = () => {
    setProductFormData({
      id: '',
      name: '',
      price: '',
      unit: 'adet',
      image: '',
      category: '',
      description: '',
      is_special: false,
    });
    setEditingProduct(null);
    setShowProductForm(false);
  };

  // Category handlers
  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCategory) {
      updateCategory(editingCategory.id, categoryFormData);
      setEditingCategory(null);
    } else {
      addCategory(categoryFormData.name, categoryFormData.display_order);
    }
    
    resetCategoryForm();
  };

  const handleCategoryEdit = (category: any) => {
    setEditingCategory(category);
    setCategoryFormData({
      name: category.name,
      display_order: category.display_order,
    });
    setShowCategoryForm(true);
  };

  const handleCategoryDelete = (id: number) => {
    if (window.confirm('Bu kategoriyi silmek istediğinizden emin misiniz?')) {
      deleteCategory(id);
    }
  };

  const resetCategoryForm = () => {
    setCategoryFormData({
      name: '',
      display_order: 0,
    });
    setEditingCategory(null);
    setShowCategoryForm(false);
  };

  // Gallery handlers
  const handleGallerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingGalleryItem) {
      updateGalleryItem(editingGalleryItem.id, galleryFormData);
      setEditingGalleryItem(null);
    } else {
      addGalleryItem(galleryFormData);
    }
    
    resetGalleryForm();
  };

  const handleGalleryEdit = (item: any) => {
    setEditingGalleryItem(item);
    setGalleryFormData({
      image_url: item.image_url,
      alt_text: item.alt_text || '',
      category: item.category,
      display_order: item.display_order,
    });
    setShowGalleryForm(true);
  };

  const handleGalleryDelete = (id: number) => {
    if (window.confirm('Bu galeri öğesini silmek istediğinizden emin misiniz?')) {
      deleteGalleryItem(id);
    }
  };

  const resetGalleryForm = () => {
    setGalleryFormData({
      image_url: '',
      alt_text: '',
      category: 'Galeri',
      display_order: 0,
    });
    setEditingGalleryItem(null);
    setShowGalleryForm(false);
  };

  // Campaign handlers
  const handleCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCampaign) {
      updateCampaign(editingCampaign.id, {
        type: campaignFormData.type,
        title: campaignFormData.title,
        subtitle: campaignFormData.subtitle,
        description: campaignFormData.description,
        bg_color: campaignFormData.bg_color,
        text_color: campaignFormData.text_color,
        is_active: campaignFormData.is_active,
        start_date: campaignFormData.start_date,
        end_date: campaignFormData.end_date,
      });
      setEditingCampaign(null);
    } else {
      addCampaign({
        id: campaignFormData.id || `campaign-${Date.now()}`,
        type: campaignFormData.type,
        title: campaignFormData.title,
        subtitle: campaignFormData.subtitle,
        description: campaignFormData.description,
        bg_color: campaignFormData.bg_color,
        text_color: campaignFormData.text_color,
        is_active: campaignFormData.is_active,
      });
    }
    
    resetCampaignForm();
  };

  const handleCampaignEdit = (campaign: any) => {
    setEditingCampaign(campaign);
    setCampaignFormData({
      id: campaign.id,
      type: campaign.type,
      title: campaign.title,
      subtitle: campaign.subtitle || '',
      description: campaign.description || '',
      bg_color: campaign.bgColor || 'bg-gradient-to-r from-amber-600 to-orange-600',
      text_color: campaign.textColor || 'text-white',
      is_active: campaign.isActive,
      start_date: campaign.start_date || '',
      end_date: campaign.end_date || '',
    });
    setShowCampaignForm(true);
  };

  const handleCampaignDelete = (id: string) => {
    if (window.confirm('Bu kampanyayı silmek istediğinizden emin misiniz?')) {
      deleteCampaign(id);
    }
  };

  const resetCampaignForm = () => {
    setCampaignFormData({
      id: '',
      type: 'special-offer',
      title: '',
      subtitle: '',
      description: '',
      bg_color: 'bg-gradient-to-r from-amber-600 to-orange-600',
      text_color: 'text-white',
      is_active: true,
      start_date: '',
      end_date: '',
    });
    setEditingCampaign(null);
    setShowCampaignForm(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Veritabanı yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Paneli</h1>
            <p className="text-gray-600">Website içeriklerini buradan yönetebilirsiniz</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Ürün Yönetimi</h2>
                  <button
                    onClick={() => setShowProductForm(!showProductForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{showProductForm ? 'İptal' : 'Yeni Ürün'}</span>
                  </button>
                </div>

                {/* Product Form */}
                {showProductForm && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      {editingProduct ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}
                    </h3>
                    <form onSubmit={handleProductSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Ürün ID
                          </label>
                          <input
                            type="text"
                            value={productFormData.id}
                            onChange={(e) => setProductFormData({ ...productFormData, id: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Otomatik oluşturulacak"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Ürün Adı *
                          </label>
                          <input
                            type="text"
                            value={productFormData.name}
                            onChange={(e) => setProductFormData({ ...productFormData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Fiyat *
                          </label>
                          <input
                            type="text"
                            value={productFormData.price}
                            onChange={(e) => setProductFormData({ ...productFormData, price: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="100"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Birim
                          </label>
                          <select
                            value={productFormData.unit}
                            onChange={(e) => setProductFormData({ ...productFormData, unit: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="adet">Adet</option>
                            <option value="kg">Kilogram</option>
                            <option value="gram">Gram</option>
                            <option value="porsiyon">Porsiyon</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Kategori *
                          </label>
                          <select
                            value={productFormData.category}
                            onChange={(e) => setProductFormData({ ...productFormData, category: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          >
                            <option value="">Kategori Seçin</option>
                            {categories.slice(1).map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Ürün Görseli *
                          </label>
                          <ImageUpload
                            value={productFormData.image}
                            onChange={(imageData) => setProductFormData({ ...productFormData, image: imageData })}
                            placeholder="Ürün resmi yükleyin"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Açıklama
                        </label>
                        <textarea
                          value={productFormData.description}
                          onChange={(e) => setProductFormData({ ...productFormData, description: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={3}
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="is_special"
                          checked={productFormData.is_special}
                          onChange={(e) => setProductFormData({ ...productFormData, is_special: e.target.checked })}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="is_special" className="ml-2 block text-sm text-gray-900">
                          Özel Ürün (Vurgulansın)
                        </label>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingProduct ? 'Güncelle' : 'Kaydet'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetProductForm}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <X className="w-4 h-4" />
                          <span>İptal</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Products List */}
                <div className="overflow-x-auto">
                  {products.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">Henüz ürün eklenmemiş.</p>
                    </div>
                  ) : (
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Görsel
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Ürün Bilgileri
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kategori
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Fiyat
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            İşlemler
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                          <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-16 w-16 object-cover rounded-lg"
                                onError={(e) => {
                                  e.currentTarget.src = 'https://via.placeholder.com/64x64?text=No+Image';
                                }}
                              />
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <div className="text-sm font-medium text-gray-900 flex items-center">
                                  {product.name}
                                  {product.isSpecial && (
                                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                      Özel
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500">
                                  ID: {product.id}
                                </div>
                                {product.description && (
                                  <div className="text-sm text-gray-500 mt-1">
                                    {product.description.substring(0, 60)}...
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              ₺{product.price} / {product.unit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                              <button
                                onClick={() => handleProductEdit(product)}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded flex items-center space-x-1"
                              >
                                <Edit className="w-3 h-3" />
                                <span>Düzenle</span>
                              </button>
                              <button
                                onClick={() => handleProductDelete(product.id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center space-x-1"
                              >
                                <Trash2 className="w-3 h-3" />
                                <span>Sil</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}

            {/* Categories Tab */}
            {activeTab === 'categories' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Kategori Yönetimi</h2>
                  <button
                    onClick={() => setShowCategoryForm(!showCategoryForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{showCategoryForm ? 'İptal' : 'Yeni Kategori'}</span>
                  </button>
                </div>

                {/* Category Form */}
                {showCategoryForm && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      {editingCategory ? 'Kategori Düzenle' : 'Yeni Kategori Ekle'}
                    </h3>
                    <form onSubmit={handleCategorySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Kategori Adı *
                          </label>
                          <input
                            type="text"
                            value={categoryFormData.name}
                            onChange={(e) => setCategoryFormData({ ...categoryFormData, name: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Sıralama
                          </label>
                          <input
                            type="number"
                            value={categoryFormData.display_order}
                            onChange={(e) => setCategoryFormData({ ...categoryFormData, display_order: Number(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingCategory ? 'Güncelle' : 'Kaydet'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetCategoryForm}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <X className="w-4 h-4" />
                          <span>İptal</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Categories List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoriesWithIds.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <Tags className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">Kategoriler yükleniyor...</p>
                    </div>
                  ) : (
                    categoriesWithIds.map((category) => (
                      <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleCategoryEdit(category)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            {category.name !== 'Tümü' && (
                              <button
                                onClick={() => handleCategoryDelete(category.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          Sıralama: {category.display_order}
                        </div>
                        <div className="text-sm text-gray-500">
                          {products.filter(p => p.category === category.name).length} ürün
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          ID: {category.id}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Galeri Yönetimi</h2>
                  <button
                    onClick={() => setShowGalleryForm(!showGalleryForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{showGalleryForm ? 'İptal' : 'Yeni Görsel'}</span>
                  </button>
                </div>

                {/* Gallery Form */}
                {showGalleryForm && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      {editingGalleryItem ? 'Görsel Düzenle' : 'Yeni Görsel Ekle'}
                    </h3>
                    <form onSubmit={handleGallerySubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Galeri Görseli *
                          </label>
                          <ImageUpload
                            value={galleryFormData.image_url}
                            onChange={(imageData) => setGalleryFormData({ ...galleryFormData, image_url: imageData })}
                            placeholder="Galeri resmi yükleyin"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alt Text
                          </label>
                          <input
                            type="text"
                            value={galleryFormData.alt_text}
                            onChange={(e) => setGalleryFormData({ ...galleryFormData, alt_text: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Görsel açıklaması"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Kategori
                          </label>
                          <select
                            value={galleryFormData.category}
                            onChange={(e) => setGalleryFormData({ ...galleryFormData, category: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Galeri">Galeri</option>
                            <option value="Pastalar">Pastalar</option>
                            <option value="Baklavalar">Baklavalar</option>
                            <option value="Sarma Grubu">Sarma Grubu</option>
                            <option value="Tepsi Tatlıları">Tepsi Tatlıları</option>
                            <option value="Çikolatalar">Çikolatalar</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Sıralama
                          </label>
                          <input
                            type="number"
                            value={galleryFormData.display_order}
                            onChange={(e) => setGalleryFormData({ ...galleryFormData, display_order: Number(e.target.value) })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingGalleryItem ? 'Güncelle' : 'Kaydet'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetGalleryForm}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <X className="w-4 h-4" />
                          <span>İptal</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {galleryWithIds.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                      <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">Henüz galeri öğesi eklenmemiş.</p>
                    </div>
                  ) : (
                    galleryWithIds.map((item, index) => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-square">
                          <img
                            src={item.image_url}
                            alt={item.alt_text || `Galeri ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Broken+Image';
                            }}
                          />
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{item.alt_text || `Galeri ${index + 1}`}</span>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleGalleryEdit(item)}
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleGalleryDelete(item.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Campaigns Tab */}
            {activeTab === 'campaigns' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Kampanya Yönetimi</h2>
                  <button
                    onClick={() => setShowCampaignForm(!showCampaignForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{showCampaignForm ? 'İptal' : 'Yeni Kampanya'}</span>
                  </button>
                </div>

                {/* Campaign Form */}
                {showCampaignForm && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      {editingCampaign ? 'Kampanya Düzenle' : 'Yeni Kampanya Ekle'}
                    </h3>
                    <form onSubmit={handleCampaignSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Kampanya ID
                          </label>
                          <input
                            type="text"
                            value={campaignFormData.id}
                            onChange={(e) => setCampaignFormData({ ...campaignFormData, id: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Otomatik oluşturulacak"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Kampanya Türü
                          </label>
                          <select
                            value={campaignFormData.type}
                            onChange={(e) => setCampaignFormData({ ...campaignFormData, type: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="special-offer">Özel Teklif</option>
                            <option value="discount">İndirim</option>
                            <option value="seasonal">Mevsimsel</option>
                            <option value="new-product">Yeni Ürün</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Başlık *
                          </label>
                          <input
                            type="text"
                            value={campaignFormData.title}
                            onChange={(e) => setCampaignFormData({ ...campaignFormData, title: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alt Başlık
                          </label>
                          <input
                            type="text"
                            value={campaignFormData.subtitle}
                            onChange={(e) => setCampaignFormData({ ...campaignFormData, subtitle: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Başlangıç Tarihi
                          </label>
                          <input
                            type="datetime-local"
                            value={campaignFormData.start_date}
                            onChange={(e) => setCampaignFormData({ ...campaignFormData, start_date: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Bitiş Tarihi
                          </label>
                          <input
                            type="datetime-local"
                            value={campaignFormData.end_date}
                            onChange={(e) => setCampaignFormData({ ...campaignFormData, end_date: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Açıklama
                        </label>
                        <textarea
                          value={campaignFormData.description}
                          onChange={(e) => setCampaignFormData({ ...campaignFormData, description: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={3}
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="is_active"
                          checked={campaignFormData.is_active}
                          onChange={(e) => setCampaignFormData({ ...campaignFormData, is_active: e.target.checked })}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                          Kampanya Aktif
                        </label>
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <Save className="w-4 h-4" />
                          <span>{editingCampaign ? 'Güncelle' : 'Kaydet'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={resetCampaignForm}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                        >
                          <X className="w-4 h-4" />
                          <span>İptal</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Campaigns List */}
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              campaign.isActive 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {campaign.isActive ? 'Aktif' : 'Pasif'}
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {campaign.type}
                            </span>
                          </div>
                          {campaign.subtitle && (
                            <p className="text-gray-600 mb-2">{campaign.subtitle}</p>
                          )}
                          <div className="text-sm text-gray-500">
                            ID: {campaign.id}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleCampaignEdit(campaign)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleCampaignDelete(campaign.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Campaign Preview */}
                      <div className={`${campaign.bgColor || 'bg-gradient-to-r from-amber-600 to-orange-600'} rounded-lg p-4 ${campaign.textColor || 'text-white'}`}>
                        <h4 className="text-xl font-bold mb-2">🎉 {campaign.title}</h4>
                        {campaign.subtitle && (
                          <p className="opacity-90">{campaign.subtitle}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;