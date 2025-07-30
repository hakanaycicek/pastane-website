// Basit JSON localStorage tabanlı database

// Database tiplerini tanımla
export interface Product {
  id: string;
  name: string;
  price: string;
  unit: string;
  category: string;
  image: string;
  description?: string;
  is_special: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface GalleryItem {
  id: number;
  image_url: string;
  alt_text?: string;
  category: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface Campaign {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  bg_color: string;
  text_color: string;
  is_active: boolean;
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
}

// LocalStorage keys
const STORAGE_KEYS = {
  PRODUCTS: 'pastane_products',
  CATEGORIES: 'pastane_categories',
  GALLERY: 'pastane_gallery',
  CAMPAIGNS: 'pastane_campaigns',
};

// Default data
const DEFAULT_CATEGORIES: Category[] = [
  { id: 1, name: 'Tümü', display_order: 0, is_active: true, created_at: new Date().toISOString() },
  { id: 2, name: 'Pastalar', display_order: 1, is_active: true, created_at: new Date().toISOString() },
  { id: 3, name: 'Sarma Grubu', display_order: 2, is_active: true, created_at: new Date().toISOString() },
  { id: 4, name: 'Tepsi Tatlıları', display_order: 3, is_active: true, created_at: new Date().toISOString() },
  { id: 5, name: 'Sütlü Tatlılar', display_order: 4, is_active: true, created_at: new Date().toISOString() },
  { id: 6, name: 'Baklavalar', display_order: 5, is_active: true, created_at: new Date().toISOString() },
  { id: 7, name: 'Diğer Ürünler', display_order: 6, is_active: true, created_at: new Date().toISOString() },
  { id: 8, name: 'İçecekler', display_order: 7, is_active: true, created_at: new Date().toISOString() },
  { id: 9, name: 'Mum Çeşitleri', display_order: 8, is_active: true, created_at: new Date().toISOString() },
];

const DEFAULT_CAMPAIGNS: Campaign[] = [
  {
    id: 'special-offer-1',
    type: 'special-offer',
    title: 'Özel İndirim',
    subtitle: '2 pasta alana 1 pasta bedava!',
    bg_color: 'bg-gradient-to-r from-amber-600 to-orange-600',
    text_color: 'text-white',
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

// Helper functions
const getFromStorage = <T>(key: string, defaultValue: T[]): T[] => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

const saveToStorage = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

const generateId = (): number => Date.now();

export const initDatabase = async (): Promise<boolean> => {
  try {
    // Initialize default data if not exists
    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      saveToStorage(STORAGE_KEYS.CATEGORIES, DEFAULT_CATEGORIES);
    }
    if (!localStorage.getItem(STORAGE_KEYS.CAMPAIGNS)) {
      saveToStorage(STORAGE_KEYS.CAMPAIGNS, DEFAULT_CAMPAIGNS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
      saveToStorage(STORAGE_KEYS.PRODUCTS, []);
    }
    if (!localStorage.getItem(STORAGE_KEYS.GALLERY)) {
      saveToStorage(STORAGE_KEYS.GALLERY, []);
    }
    
    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
};

// Database operasyonları
export class DatabaseService {
  private initialized = false;

  async init(): Promise<void> {
    await initDatabase();
    this.initialized = true;
  }

  private ensureInitialized(): void {
    if (!this.initialized) {
      throw new Error('Database not initialized. Call init() first.');
    }
  }

  // PRODUCTS
  getAllProducts(): Product[] {
    this.ensureInitialized();
    return getFromStorage<Product>(STORAGE_KEYS.PRODUCTS, []);
  }

  getProductById(id: string): Product | undefined {
    this.ensureInitialized();
    const products = this.getAllProducts();
    return products.find(p => p.id === id);
  }

  createProduct(product: Omit<Product, 'created_at' | 'updated_at'>): void {
    this.ensureInitialized();
    const products = this.getAllProducts();
    const newProduct: Product = {
      ...product,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    products.push(newProduct);
    saveToStorage(STORAGE_KEYS.PRODUCTS, products);
    console.log('Product created:', newProduct);
  }

  updateProduct(id: string, updates: Partial<Omit<Product, 'id' | 'created_at' | 'updated_at'>>): void {
    this.ensureInitialized();
    const products = this.getAllProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      saveToStorage(STORAGE_KEYS.PRODUCTS, products);
      console.log('Product updated:', products[index]);
    }
  }

  deleteProduct(id: string): void {
    this.ensureInitialized();
    const products = this.getAllProducts();
    const filtered = products.filter(p => p.id !== id);
    saveToStorage(STORAGE_KEYS.PRODUCTS, filtered);
    console.log('Product deleted:', id);
  }

  // CATEGORIES
  getAllCategories(): Category[] {
    this.ensureInitialized();
    return getFromStorage<Category>(STORAGE_KEYS.CATEGORIES, DEFAULT_CATEGORIES)
      .filter(c => c.is_active)
      .sort((a, b) => a.display_order - b.display_order);
  }

  createCategory(name: string, displayOrder: number = 0): void {
    this.ensureInitialized();
    const categories = getFromStorage<Category>(STORAGE_KEYS.CATEGORIES, DEFAULT_CATEGORIES);
    const newCategory: Category = {
      id: generateId(),
      name,
      display_order: displayOrder,
      is_active: true,
      created_at: new Date().toISOString(),
    };
    categories.push(newCategory);
    saveToStorage(STORAGE_KEYS.CATEGORIES, categories);
    console.log('Category created:', newCategory);
  }

  updateCategory(id: number, updates: Partial<Pick<Category, 'name' | 'display_order' | 'is_active'>>): void {
    this.ensureInitialized();
    const categories = getFromStorage<Category>(STORAGE_KEYS.CATEGORIES, DEFAULT_CATEGORIES);
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updates };
      saveToStorage(STORAGE_KEYS.CATEGORIES, categories);
      console.log('Category updated:', categories[index]);
    }
  }

  deleteCategory(id: number): void {
    this.ensureInitialized();
    const categories = getFromStorage<Category>(STORAGE_KEYS.CATEGORIES, DEFAULT_CATEGORIES);
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index].is_active = false;
      saveToStorage(STORAGE_KEYS.CATEGORIES, categories);
      console.log('Category deleted:', id);
    }
  }

  // GALLERY
  getAllGalleryItems(): GalleryItem[] {
    this.ensureInitialized();
    return getFromStorage<GalleryItem>(STORAGE_KEYS.GALLERY, [])
      .filter(g => g.is_active)
      .sort((a, b) => a.display_order - b.display_order);
  }

  createGalleryItem(item: Omit<GalleryItem, 'id' | 'created_at'>): void {
    this.ensureInitialized();
    const gallery = getFromStorage<GalleryItem>(STORAGE_KEYS.GALLERY, []);
    const newItem: GalleryItem = {
      ...item,
      id: generateId(),
      created_at: new Date().toISOString(),
    };
    gallery.push(newItem);
    saveToStorage(STORAGE_KEYS.GALLERY, gallery);
    console.log('Gallery item created:', newItem);
  }

  updateGalleryItem(id: number, updates: Partial<Omit<GalleryItem, 'id' | 'created_at'>>): void {
    this.ensureInitialized();
    const gallery = getFromStorage<GalleryItem>(STORAGE_KEYS.GALLERY, []);
    const index = gallery.findIndex(g => g.id === id);
    if (index !== -1) {
      gallery[index] = { ...gallery[index], ...updates };
      saveToStorage(STORAGE_KEYS.GALLERY, gallery);
      console.log('Gallery item updated:', gallery[index]);
    }
  }

  deleteGalleryItem(id: number): void {
    this.ensureInitialized();
    const gallery = getFromStorage<GalleryItem>(STORAGE_KEYS.GALLERY, []);
    const index = gallery.findIndex(g => g.id === id);
    if (index !== -1) {
      gallery[index].is_active = false;
      saveToStorage(STORAGE_KEYS.GALLERY, gallery);
      console.log('Gallery item deleted:', id);
    }
  }

  // CAMPAIGNS
  getAllCampaigns(): Campaign[] {
    this.ensureInitialized();
    return getFromStorage<Campaign>(STORAGE_KEYS.CAMPAIGNS, DEFAULT_CAMPAIGNS);
  }

  getActiveCampaigns(): Campaign[] {
    this.ensureInitialized();
    return this.getAllCampaigns().filter(c => c.is_active);
  }

  createCampaign(campaign: Omit<Campaign, 'created_at' | 'updated_at'>): void {
    this.ensureInitialized();
    const campaigns = this.getAllCampaigns();
    const newCampaign: Campaign = {
      ...campaign,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    campaigns.push(newCampaign);
    saveToStorage(STORAGE_KEYS.CAMPAIGNS, campaigns);
    console.log('Campaign created:', newCampaign);
  }

  updateCampaign(id: string, updates: Partial<Omit<Campaign, 'id' | 'created_at' | 'updated_at'>>): void {
    this.ensureInitialized();
    const campaigns = this.getAllCampaigns();
    const index = campaigns.findIndex(c => c.id === id);
    if (index !== -1) {
      campaigns[index] = {
        ...campaigns[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      saveToStorage(STORAGE_KEYS.CAMPAIGNS, campaigns);
      console.log('Campaign updated:', campaigns[index]);
    }
  }

  deleteCampaign(id: string): void {
    this.ensureInitialized();
    const campaigns = this.getAllCampaigns();
    const index = campaigns.findIndex(c => c.id === id);
    if (index !== -1) {
      campaigns[index].is_active = false;
      saveToStorage(STORAGE_KEYS.CAMPAIGNS, campaigns);
      console.log('Campaign deleted:', id);
    }
  }
}

// Singleton instance
export const dbService = new DatabaseService();