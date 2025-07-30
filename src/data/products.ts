export interface Product {
  id: string;
  name: string;
  price: string;
  unit: string;
  category: string;
  image: string;
  description?: string;
  isSpecial?: boolean;
}

export const products: Product[] = [
  // PASTALAR
  {
    id: 'pasta-4kisilik',
    name: '4 Kişilik Pasta',
    price: '200',
    unit: 'adet',
    category: 'Pastalar',
    image: 'https://images.pexels.com/photos/1721643/pexels-photo-1721643.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Aile boyu taze ve lezzetli pasta'
  },
  {
    id: 'pasta-no0',
    name: 'NO:0 Pasta',
    price: '390',
    unit: 'adet',
    category: 'Pastalar',
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Özel boyutta hazırlanmış pasta'
  },
  {
    id: 'pasta-no1',
    name: 'NO:1 Pasta',
    price: '580',
    unit: 'adet',
    category: 'Pastalar',
    image: 'https://images.pexels.com/photos/1721677/pexels-photo-1721677.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Orta boy özel pasta'
  },
  {
    id: 'pasta-no2',
    name: 'NO:2 Pasta',
    price: '700',
    unit: 'adet',
    category: 'Pastalar',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Büyük boy özel pasta'
  },
  {
    id: 'pasta-tek-dilim',
    name: 'Tek Dilim Pasta',
    price: '85',
    unit: 'adet',
    category: 'Pastalar',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Bireysel porsiyon pasta dilimi',
    isSpecial: true
  },

  // SARMA GRUBU
  {
    id: 'meyveli-bahce',
    name: 'Meyveli Bahçe',
    price: '480',
    unit: 'kg',
    category: 'Sarma Grubu',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Taze meyvelerle hazırlanmış sarma tatlı'
  },
  {
    id: 'mini-muz-sarma',
    name: 'Mini Muz Sarma',
    price: '130',
    unit: 'kg',
    category: 'Sarma Grubu',
    image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Muzlu mini sarma tatlılar'
  },
  {
    id: 'muz-sarma-dilim',
    name: 'Muz Sarma Dilim',
    price: '480',
    unit: 'adet',
    category: 'Sarma Grubu',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Dilim halinde muzlu sarma'
  },
  {
    id: 'tartolet',
    name: 'Tartolet',
    price: '480',
    unit: 'kg',
    category: 'Sarma Grubu',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Özel tartolet çeşitleri'
  },
  {
    id: 'cikolata-mix',
    name: 'Çikolata Mix',
    price: '480',
    unit: 'kg',
    category: 'Sarma Grubu',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Çikolatalı karışık sarma'
  },
  {
    id: 'fistikli-mix',
    name: 'Fıstıklı Mix',
    price: '480',
    unit: 'kg',
    category: 'Sarma Grubu',
    image: 'https://images.pexels.com/photos/1707642/pexels-photo-1707642.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fıstıklı karışık sarma çeşitleri'
  },

  // TEPSİ TATLILARI
  {
    id: 'tralice-karamelli',
    name: 'Traliçe Karamelli',
    price: '130',
    unit: 'adet',
    category: 'Tepsi Tatlıları',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Karamelli traliçe tatlısı'
  },
  {
    id: 'tralice-franbuazli',
    name: 'Traliçe Franbuazlı',
    price: '130',
    unit: 'adet',
    category: 'Tepsi Tatlıları',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Franbuazlı traliçe tatlısı'
  },
  {
    id: 'malaga',
    name: 'Malaga',
    price: '130',
    unit: 'adet',
    category: 'Tepsi Tatlıları',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Geleneksel Malaga tatlısı'
  },

  // BAKLAVALAR
  {
    id: 'fistikli-baklava',
    name: 'Fıstıklı Baklava',
    price: '550',
    unit: 'kg',
    category: 'Baklavalar',
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Antep fıstığı ile hazırlanmış baklava',
    isSpecial: true
  },
  {
    id: 'fistikli-cimcik',
    name: 'Fıstıklı Cimcik',
    price: '580',
    unit: 'kg',
    category: 'Baklavalar',
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Özel cimcik baklava'
  },
  {
    id: 'cevizli-baklava',
    name: 'Cevizli Baklava',
    price: '395',
    unit: 'kg',
    category: 'Baklavalar',
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Cevizli geleneksel baklava'
  },
  {
    id: 'midye-fistikli',
    name: 'Midye Fıstıklı',
    price: '690',
    unit: 'kg',
    category: 'Baklavalar',
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Özel midye şeklinde fıstıklı baklava'
  },

  // DİĞER ÜRÜNLER
  {
    id: 'halka-tatli',
    name: 'Halka Tatlısı',
    price: '30',
    unit: 'adet',
    category: 'Diğer Ürünler',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Geleneksel halka tatlısı'
  },
  {
    id: 'donut',
    name: 'Donut',
    price: '80',
    unit: 'adet',
    category: 'Diğer Ürünler',
    image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Taze yapılmış donut'
  },
  {
    id: 'makaron',
    name: 'Makaron',
    price: '40',
    unit: 'adet',
    category: 'Diğer Ürünler',
    image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Renkli makaron çeşitleri'
  },
  {
    id: 'dubai-cikolatasi',
    name: 'Dubai Çikolatası',
    price: '80',
    unit: 'adet',
    category: 'Diğer Ürünler',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Özel Dubai çikolatası',
    isSpecial: true
  },

  // İÇECEKLER
  {
    id: 'su',
    name: 'Su',
    price: '15',
    unit: 'adet',
    category: 'İçecekler',
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Soğuk su'
  },
  {
    id: 'limonata',
    name: 'Limonata',
    price: '60',
    unit: 'adet',
    category: 'İçecekler',
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Taze limonata'
  },
  {
    id: 'cola',
    name: 'Cola',
    price: '70',
    unit: 'adet',
    category: 'İçecekler',
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Soğuk cola'
  }
];

export const categories = [
  'Tümü',
  'Pastalar',
  'Sarma Grubu',
  'Tepsi Tatlıları',
  'Sütlü Tatlılar',
  'Baklavalar',
  'Diğer Ürünler',
  'İçecekler',
  'Mum Çeşitleri'
];