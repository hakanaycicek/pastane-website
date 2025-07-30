-- SQLite Database Schema for Pastane Website

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    unit TEXT DEFAULT 'adet',
    category TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT,
    is_special BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    category TEXT DEFAULT 'Galeri',
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Campaigns table  
CREATE TABLE IF NOT EXISTS campaigns (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    bg_color TEXT DEFAULT 'bg-gradient-to-r from-amber-600 to-orange-600',
    text_color TEXT DEFAULT 'text-white',
    is_active BOOLEAN DEFAULT TRUE,
    start_date DATETIME,
    end_date DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert default categories
INSERT OR IGNORE INTO categories (name, display_order) VALUES
    ('Tümü', 0),
    ('Pastalar', 1),
    ('Sarma Grubu', 2),
    ('Tepsi Tatlıları', 3),
    ('Sütlü Tatlılar', 4),
    ('Baklavalar', 5),
    ('Diğer Ürünler', 6),
    ('İçecekler', 7),
    ('Mum Çeşitleri', 8);

-- Insert default campaign
INSERT OR IGNORE INTO campaigns (id, type, title, subtitle, is_active) VALUES
    ('special-offer-1', 'special-offer', 'Özel İndirim', '2 pasta alana 1 pasta bedava!', TRUE);